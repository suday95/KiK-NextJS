"use client";

import { useEffect } from "react";
import main from "../../data/animations/main.json";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../utils/Card";
import Link from "next/link";
import logo from "../../data/animations/newLanding/logofull.json";
import robo from "../../data/animations/newLanding/robo.json";
import { motion } from "framer-motion";

// ✅ Import react-icons
import { FaPaperPlane, FaLink, FaBolt } from "react-icons/fa";

export default function Landing() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline();

    tl.fromTo(
      ".navbar .logoo",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 2, ease: "power2.out" }
    );

    tl.fromTo(
      ".navbar .MainPartNavBar li",
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=1.5"
    );

    tl.fromTo(
      ".right .Welcome",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 1, ease: "power2.out" },
      "-=1.5"
    );

    tl.fromTo(
      ".right span",
      { x: 0, opacity: 0 },
      { x: 100, opacity: 1, duration: 0.5, delay: 1, ease: "power2.out" },
      "-=1.5"
    );

    tl.fromTo(
      ".right .vision",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 1, ease: "power2.out" },
      "-=1.5"
    );

    tl.fromTo(
      ".right .vision-depth",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 1, ease: "power2.out" },
      "-=1"
    );

    tl.fromTo(
      ".left",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, ease: "power2.out" },
      "-=1.2"
    );

    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bottom-bar .text",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
        scroller: "body",
      },
    });

    t2.fromTo(
      ".bottom-bar .text",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    var t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#recentHeader",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
        scroller: "body",
      },
    });

    t3.fromTo(
      "#recentHeader",
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#00002C]">
      <div className="flex flex-col justify-between p-3 md:flex-row md:pl-10">
        {/* left text section */}
        <div className="p-3 text-center text-lg md:w-1/2 md:p-8 md:text-left">
          <div className="mt-10 mb-10 flex flex-col items-start justify-center md:mt-0 md:mb-0 md:w-1/2">
            {/* Line 1: "Welcome to" */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              className="w-full text-2xl leading-tight font-semibold whitespace-nowrap text-[#EAF2FF] sm:text-3xl md:text-5xl"
            >
              Welcome to
            </motion.div>

            {/* Line 2: "KodeinKGP" */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.8, staggerChildren: 0.1 },
                },
              }}
              className="mt-2 w-full text-4xl leading-[1.1] font-extrabold tracking-tight whitespace-nowrap sm:text-5xl md:text-7xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {"KodeinKGP".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-block"
                  style={{
                    background:
                      i < 6
                        ? "linear-gradient(90deg, #79D7FF 0%, #4FB0FF 48%, #3E8EFF 100%)"
                        : "linear-gradient(90deg, #566CFF 0%, #6A58FF 40%, #7C37FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </motion.h1>

            {/* Line 3: "TECH | WEB 3.O" */}
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 1.5, staggerChildren: 0.08 },
                },
              }}
              className="mt-3 w-full text-xl font-medium tracking-wide whitespace-nowrap text-white sm:text-2xl md:text-3xl"
            >
              {"TECH | WEB 3.O".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-block"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* ✅ Feature Card Section */}
          <div className="mt-24 w-full max-w-md rounded-2xl bg-[#0B0E2A] border-3 border-blue-500/30 shadow-lg p-6">
            <ul className="space-y-12">
              <li className="flex items-center gap-6">
                <FaPaperPlane className="text-blue-400 text-xl" />
                <Link
                  href="#web3"
                  className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
                >
                  Web 3.0 & AI Innovation
                </Link>
              </li>
              <li className="flex items-center gap-6">
                <FaLink className="text-blue-400 text-xl" />
                <Link
                  href="#blockchain"
                  className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
                >
                  Blockchain Development
                </Link>
              </li>
              <li className="flex items-center gap-6">
                <FaBolt className="text-blue-400 text-xl" />
                <Link
                  href="#hackathons"
                  className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
                >
                  Real-world Hackathons & Workshops
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* right animation section */}
        <div className="mt-10 mb-10 flex flex-col items-center justify-center md:mt-0 md:mb-0 md:w-1/2">
          <Lottie
            loop={false}
            animationData={logo}
            className="w-[50%] max-w-[500px] md:w-full"
          />
          <Lottie
            loop={false}
            animationData={robo}
            className="w-[80%] max-w-[500px] md:w-full"
          />
        </div>
      </div>

      {/* bottom bar */}
      <div className="bottom-bar flex flex-col items-start justify-between gap-8 px-8 pb-[60px] text-left md:flex-row md:gap-16 md:px-[60px]">
        <div className="text text-3xl font-semibold text-white">
          260+{" "}
          <span className="bg-gradient-to-br from-[#11e3fb] via-[#5be6ff] to-[#11e3fb] bg-clip-text text-2xl text-transparent">
            PDS Problems
          </span>
        </div>
        <div className="text text-3xl font-semibold text-white">
          17+{" "}
          <span className="bg-gradient-to-br from-[#11e3fb] via-[#5be6ff] to-[#11e3fb] bg-clip-text text-2xl text-transparent">
            Articles
          </span>
        </div>
        <div className="text text-3xl font-semibold text-white">
          15+{" "}
          <span className="bg-gradient-to-br from-[#11e3fb] via-[#5be6ff] to-[#11e3fb] bg-clip-text text-2xl text-transparent">
            Events
          </span>
        </div>
        <div className="text text-3xl font-semibold text-white">
          7000+{" "}
          <span className="bg-gradient-to-br from-[#11e3fb] via-[#5be6ff] to-[#11e3fb] bg-clip-text text-2xl text-transparent">
            Community Members
          </span>
        </div>
      </div>
    </div>
  );
}
