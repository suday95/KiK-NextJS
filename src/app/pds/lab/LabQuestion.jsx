import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import dataJ from "../../../data/qna/lab-questions.json";

export default function LabQuestion() {
  const [flag, setFlag] = useState(false);
  const [copy, setCopy] = useState(false);
  const [question, setQuestion] = useState("");
  const [solution, setSolution] = useState("");

  const { topic, subTopic, ind: indStr } = useParams();
  const ind = parseInt(indStr, 10);

  useEffect(() => {
    if (!topic || isNaN(ind)) return;

    let arr = [];

    if (topic === "labTest") {
      // flatten _all_ lab questions across every chapter & subtopic
      Object.values(dataJ).forEach((chapterArray) => {
        chapterArray.forEach((chapter) => {
          if (chapter.type === "lab" && chapter.Subtopics) {
            Object.values(chapter.Subtopics).forEach((qList) => {
              arr = arr.concat(qList);
            });
          }
        });
      });
    } else {
      // look up exactly the one chapter you asked for
      const chapterArray = dataJ[topic];
      if (Array.isArray(chapterArray)) {
        const chapter = chapterArray[0];
        const qList = chapter?.Subtopics?.[subTopic];
        if (Array.isArray(qList)) {
          arr = qList;
        }
      }
    }

    if (arr[ind]) {
      setQuestion(arr[ind].Question);
      setSolution(arr[ind].Answer);
    }
  }, [topic, subTopic, ind]);

  const handleCopy = () => {
    navigator.clipboard.writeText(solution);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="bg-[#01011b] p-5">
      <div className="mx-4 my-5 rounded-xl bg-[#222] p-5 text-base font-black text-white shadow-md">
        <pre className="overflow-x-auto whitespace-pre-wrap">{question}</pre>
      </div>

      <button
        onClick={() => setFlag(!flag)}
        className="mx-2.5 my-2.5 cursor-pointer rounded-md bg-[#00a1d9] px-5 py-2.5 text-white hover:bg-[#007dab]"
      >
        {flag ? "Hide Solution" : "Show Solution"}
      </button>

      {flag && (
        <div className="relative mx-5 my-5 flex flex-col">
          <div className="bg-[#282a36] px-0 py-0">
            <button
              className="cursor-pointer rounded-br-xl bg-[#3f3d3d] px-4 py-1 text-base text-white"
              onClick={handleCopy}
            >
              {copy ? "✅" : "📄"}
            </button>
          </div>
          <SyntaxHighlighter
            language="cpp"
            style={dracula}
            customStyle={{
              padding: "1.5rem",
              margin: "0rem",
              backgroundColor: "#282a36",
            }}
            wrapLongLines={true}
          >
            {solution}
          </SyntaxHighlighter>
        </div>
      )}

      <a
        href="https://www.programiz.com/c-programming/online-compiler/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2.5 my-2.5 inline-block rounded-md bg-[#00a1d9] px-5 py-2.5 text-white no-underline hover:bg-[#007dab]"
      >
        Open Online Editor
      </a>
    </div>
  );
}
