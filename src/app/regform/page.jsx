"use client";

import { useEffect, useState } from "react";
import "./regformcss.css";
import Image from "next/image";
import Link from "next/link";
import aiimg from "./ai3.png";
import AlertComponent from "./AlertComponent";
import { db } from "@/backend/firebase";
import { collection, addDoc } from "firebase/firestore";

const rollRegex = /^25[A-Z]{2}\d{5,6}$/;
const instiMailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.iitkgp\.ac\.in$/i;

const RegForm = () => {
  const [nme, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [instituteEmail, setInstituteEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [otherInvolvements, setOtherInvolvements] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [selTeams, setSelTeams] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertShown, setAlertShown] = useState(false);
  const [successShown, setSuccessShown] = useState(false);

  const teamOptions = [
    { value: "Trainee Developer", label: "Trainee Developer" },
    {
      value: "Associate Events Coordinator",
      label: "Associate Events Coordinator",
    },
    {
      value: "Associate Design Coordinator",
      label: "Associate Design Coordinator",
    },
  ];

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    if (alertShown) {
      const timer = setTimeout(() => setAlertShown(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [alertShown]);

  useEffect(() => {
    if (successShown) {
      const timer = setTimeout(() => setSuccessShown(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [successShown]);

  const handleRollChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleInstiMailChange = (e) => {
    setInstituteEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoad(true);

    const trimmedRoll = rollNumber.trim().toUpperCase();
    const trimmedInstiMail = instituteEmail.trim();
    // Validate again before submit
    if (!rollRegex.test(trimmedRoll)) {
      setAlertMsg("Roll number Invalid");
      setAlertShown(true);
      setIsLoad(false);
      return;
    }
    if (!instiMailRegex.test(trimmedInstiMail)) {
      setAlertMsg("Institute email must end with .iitkgp.ac.in");
      setAlertShown(true);
      setIsLoad(false);
      return;
    }

    if (
      selTeams.length === 0 ||
      nme.trim() === "" ||
      rollNumber.trim() === "" ||
      personalEmail.trim() === "" ||
      instituteEmail.trim() === "" ||
      contactNumber.trim() === ""
    ) {
      setAlertMsg("Please fill all the fields and select at least one team");
      setAlertShown(true);
      setIsLoad(false);
      return;
    }

    try {
      await addDoc(collection(db, "registrations"), {
        name: nme,
        rollNumber: trimmedRoll,
        personalEmail: personalEmail.trim(),
        instituteEmail: trimmedInstiMail,
        contactNumber: contactNumber.trim(),
        otherInvolvements: otherInvolvements.trim(),
        selTeams,
        timestamp: new Date(),
      });

      setSuccessShown(true);
      setName("");
      setRollNumber("");
      setPersonalEmail("");
      setInstituteEmail("");
      setContactNumber("");
      setOtherInvolvements("");
      setSelTeams([]);
    } catch (error) {
      setAlertMsg("Error registering: " + error.message);
      setAlertShown(true);
    }
    setIsLoad(false);
  };

  const handleTeamChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelTeams((prev) => [...prev, value]);
    } else {
      setSelTeams((prev) => prev.filter((team) => team !== value));
    }
  };

  return (
    <>
      <div className="regpage">
        <div className="imgofai">
          <Image src={aiimg} alt="AI" className="aiimgreg" />
        </div>
        <div className="regbox">
          {/* <h5 className="reg-header">Registration Form</h5> */}
          <div className="reg-closed-heading">
            Registrations Are Closed For Now
          </div>
          <div className="tasks-section">
            <span>You can check out our Tasks</span>
            <Link
              href="https://drive.google.com/drive/folders/1D0FQO71wafl2QFE-MTb6JCQhUIpU2SNX"
              className="tasks-link"
              target="_blank"
            >
              Here
            </Link>
          </div>
        </div>
        {/* {alertShown && (
          <AlertComponent
            type={"warning"}
            title={"Error registering for selections"}
            message={alertMsg}
          />
        )}
        {successShown && (
          <AlertComponent
            type={"success"}
            title={"Successfully registered for selections"}
            message={"Thank you for participating in selection"}
          />
        )} */}
      </div>
    </>
  );
};

export default RegForm;
