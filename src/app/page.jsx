"use client";
import React, { useEffect, useState } from "react";
import Landing from "@/Components/Landing/landing";
import Work from "@/Components/Landing/work";
import Contribution from "@/Components/Landing/contribution";
import Loader from "@/Components/utils/loader";

const MainContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#00002C]">
      {/* Content always rendered */}
      <Landing />
      <Work />
      <Contribution />
      

      {/* Loader overlay */}
      <div
        className={`absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#00002C] transition-opacity duration-500 ease-in-out ${loading ? "z-50 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
      >
        <Loader />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="App">
      <MainContent />
    </div>
  );
};

export default Home;
