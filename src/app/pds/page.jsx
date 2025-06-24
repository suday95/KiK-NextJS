"use client";

import Image from "next/image";
import { useEffect } from "react";
import robo from "./assets/robo.png";
import notebook from "./assets/notebook.png";
import computer from "./assets/computer.png";
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    document.querySelectorAll(".cta-button").forEach((button) => {
      button.addEventListener("click", function (e) {
        const ripple = document.createElement("div");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    if (!document.getElementById("ripple-keyframes")) {
      const rippleStyle = document.createElement("style");
      rippleStyle.id = "ripple-keyframes";
      rippleStyle.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(rippleStyle);
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#01011b] font-[kanit] text-white">
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
        <div
          className="animate-float absolute top-[20%] left-[10%] h-[100px] w-[100px] rounded-full bg-cyan-400/20"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="animate-float absolute top-[10%] left-[36%] h-[80px] w-[80px] rounded-full bg-cyan-400/20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="animate-float absolute top-[2%] left-[6%] h-[80px] w-[80px] rounded-full bg-cyan-400/20"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <header className="relative pt-8 pb-2">
          <div className="mb-10 flex flex-col items-center gap-10 md:mb-30 md:flex-row md:gap-20">
            <div className="flex-1">
              <h1 className="mb-6 bg-gradient-to-br from-white to-[#e0e0ff] bg-clip-text text-[40px] leading-[1.1] font-extrabold text-transparent md:text-[56px]">
                Master Programming Through Practice
              </h1>
              <p className="mb-10 max-w-[500px] text-[18px] leading-[1.6] font-bold text-white/70 md:text-[20px]">
                Comprehensive collection of lab and theory problems designed to
                enhance your programming skills and computer science knowledge.
              </p>
            </div>
            <div className="relative flex flex-1 items-center justify-center">
              <div className="relative flex animate-[float_4s_ease-in-out_infinite] items-center justify-center rounded-[24px] bg-transparent p-8">
                <Image src={computer} alt="Computer" width={350} height={350} />
              </div>
            </div>
          </div>
        </header>
        <div className="jsx-44e2f37957c96ba0 animate-shimmer h-1 w-full bg-gradient-to-r from-transparent via-[#87CEEB] to-transparent"></div>
        <section className="mt-10 mb-20" id="problems">
          <h2 className="mb-4 bg-gradient-to-br from-white to-[#e0e0ff] bg-clip-text text-center text-[32px] font-bold text-transparent md:text-[48px]">
            Choose Your Path
          </h2>
          <p className="mx-auto max-w-[600px] text-center text-[18px] text-white/60">
            Select from our curated problem sets designed for different learning
            objectives and skill levels.
          </p>
        </section>

        <div className="">
          <div className="grid min-h-screen grid-cols-1 content-center items-center gap-10 md:grid-cols-2 md:gap-20">
            <div className="relative flex transform flex-col overflow-hidden rounded-[20px] border-2 border-cyan-400 bg-[rgba(26,26,46,0.8)] p-10 shadow-[0_20px_40px_rgba(0,212,255,0.1)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(0,212,255,0.2)] md:p-16">
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="animate-float relative mb-5 flex h-[140px] w-[140px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-700 md:mb-8 md:h-[200px] md:w-[200px]">
                  <Image
                    src={robo}
                    alt="Robo"
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%" }}
                  />
                  <div
                    className="absolute hidden h-10 w-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg border-2 border-cyan-400 bg-[rgba(0,76,153,0.3)] md:block"
                    style={{ top: "20%", left: "10%", animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute hidden h-10 w-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg border-2 border-cyan-400 bg-[rgba(0,76,153,0.3)] md:block"
                    style={{ top: "70%", right: "10%", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute hidden h-10 w-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg border-2 border-cyan-400 bg-[rgba(0,76,153,0.3)] md:block"
                    style={{ top: "40%", right: "20%", animationDelay: "2s" }}
                  ></div>
                </div>
                <h1 className="mb-4 bg-gradient-to-br from-cyan-400 to-white bg-clip-text text-[1.6rem] font-bold tracking-wider text-transparent uppercase md:text-[2.2rem]">
                  Lab Problems
                </h1>
                <Link href="pds/lab">
                  <button
                    className="cta-button relative mt-auto cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-cyan-700 px-8 py-3 text-[1.1rem] font-semibold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)]"
                    onClick={() => (window.location.href = "#lab-problems")}
                  >
                    See Problems
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative flex transform flex-col overflow-hidden rounded-[20px] border-2 border-cyan-400 bg-[rgba(26,26,46,0.8)] p-10 shadow-[0_20px_40px_rgba(0,212,255,0.1)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(0,212,255,0.2)] md:p-16">
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="animate-float relative mb-5 flex h-[140px] w-[140px] items-center justify-center rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0099CC] md:mb-8 md:h-[200px] md:w-[200px]">
                  <Image
                    src={notebook}
                    alt="Notebook"
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%" }}
                  />
                  <div
                    className="absolute hidden h-10 w-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg border-2 border-cyan-400 bg-[rgba(0,76,153,0.3)] md:block"
                    style={{ top: "20%", left: "10%", animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute hidden h-10 w-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg border-2 border-cyan-400 bg-[rgba(0,76,153,0.3)] md:block"
                    style={{ top: "70%", right: "10%", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute hidden h-10 w-10 animate-[pulse_3s_ease-in-out_infinite] rounded-lg border-2 border-cyan-400 bg-[rgba(0,76,153,0.3)] md:block"
                    style={{ top: "40%", right: "20%", animationDelay: "2s" }}
                  ></div>
                </div>
                <h1 className="mb-4 bg-gradient-to-br from-cyan-400 to-white bg-clip-text text-[1.6rem] font-bold tracking-wider text-transparent uppercase md:text-[2.2rem]">
                  Theory Problems
                </h1>
                <Link href="/pds/theory">
                  <button className="cta-button relative mt-auto cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-cyan-700 px-8 py-3 text-[1.1rem] font-semibold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)]">
                    See Problems
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
