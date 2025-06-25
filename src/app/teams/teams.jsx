"use client";
import SelectedTeam from "./SelectedTeam";


import React, { useState, useEffect } from "react";


const MainContent = () => {
  const [activeButton, setActiveButton] = useState("1");

  const ButtonClicked = (e) => {
    setActiveButton(e.target.id);
   
  };
  return (
    <div className="teams">
      <div className="classif-buttons flex flex-wrap gap-4 justify-center mb-8">
          <button
            className={`team-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              activeButton === "1" 
                ? "bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50" 
                : "bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:border-gray-500"
            }`}
            id="1"
            onClick={ButtonClicked}
          >
            Tech Team
          </button>
          <button
            className={`team-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              activeButton === "2" 
                ? "bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50" 
                : "bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:border-gray-500"
            }`}
            id="2"
            onClick={ButtonClicked}
          >
            AI & Metaverse Team
          </button>
          <button
            className={`team-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              activeButton === "3" 
                ? "bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50" 
                : "bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:border-gray-500"
            }`}
            id="3"
            onClick={ButtonClicked}
          >
            Blockchain Team
          </button>
          <button
            className={`team-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              activeButton === "4" 
                ? "bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50" 
                : "bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:border-gray-500"
            }`}
            id="4"
            onClick={ButtonClicked}
          >
            Events Team
          </button>
          <button
            className={`team-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              activeButton === "5" 
                ? "bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/50" 
                : "bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:border-gray-500"
            }`}
            id="5"
            onClick={ButtonClicked}
          >
            Design & Media Team
          </button>
        </div>
      
      <div>
        <SelectedTeam key={activeButton} id={activeButton} />
      </div>
    </div>
  );
};

const Teams = () => {
  return <div className="App">{<MainContent />}</div>;
};

export default Teams;
