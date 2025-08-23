import React from "react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Robot from "../../data/animations/Robo.json";
import Lottie from "lottie-react";
import WEBDEV from "../../data/animations/WEB.json";
import Blockchain from "../../data/animations/Blockchain.json";
import Web from "../../data/animations/newLanding/Web.json";
import AI from "../../data/animations/newLanding/AI.json";
import Block from "../../data/animations/newLanding/Block.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import programmer from "../../../public/programmer-image.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

gsap.registerPlugin(ScrollTrigger);

export default function Teams() {
  const cardRefs = useRef([]);
  const lottieRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const left = cardRefs.current[0];
    const center = cardRefs.current[1]; 
    const right = cardRefs.current[2];

    // Guard if refs aren't available
    if (!left || !center || !right) return;

    const isDesktop = window.innerWidth > 768;

    // Set initial states
    gsap.set(left, { x: isDesktop ? -800 : -200, opacity: 0 });
    gsap.set(right, { x: isDesktop ? 800 : 200, opacity: 0 }); 
    gsap.set(center, { scale: isDesktop ? 0.9 : 0.95, opacity: 0 });

    // Create timeline with scroll trigger
    gsap.timeline({
      scrollTrigger: {
        trigger: left.parentElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
    .to([left, right], {
      x: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power3.out"
    }, 0)
    .to(center, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: "back.out(1.6)"
    }, 0.2);

    // Poster animation
    const poster = document.querySelector(".pds-page-poster-wrapper");
    if (poster) {
      gsap.fromTo(poster, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: poster,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={`bg-[#00002C] relative ${montserrat.variable}`}>
      <h2
        id="recentHeader"
        className="my-8 bg-gradient-to-br from-[#11E3FB] via-[#5BE6FF] to-[#11E3FB] [background-clip:text] text-center text-[48px] font-bold text-transparent [-webkit-background-clip:text]"
      >
        Our Expertise
      </h2>

      <div className="!mb-[20vw] max-[768px]:relative max-[768px]:mb-[5vh] max-[768px]:flex max-[768px]:max-h-fit max-[768px]:flex-col max-[768px]:items-center md:flex md:flex-row md:justify-center md:items-center md:gap-[6vw] md:h-auto md:pb-0">
        <div
          className="mt-2 h-[40vw] rounded-[2.5vw] p-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.63,0.15,0.03,1.12)] max-[768px]:relative max-[768px]:top-0 max-[768px]:left-0 max-[768px]:!mb-[10px] max-[768px]:h-[130vw] max-[768px]:w-[70vw] md:relative md:w-[26%] md:h-[32vw] relative overflow-hidden group"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="lottie-wrapper absolute inset-0 flex justify-center items-center z-10">
            <Lottie 
              animationData={AI} 
              height={10} 
              lottieRef={(ref) => (lottieRefs.current[0] = ref)}
              autoplay={true}
              loop={true}
            />
          </div>

          <div className="overlay absolute inset-0 z-20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[rgba(54,54,54,0.9)] rounded-[2.5vw] flex flex-col justify-center items-center text-center px-5">
            <p className="font-montserrat -webkit-bg-clip-text mb-4 bg-[linear-gradient(to_bottom_right,rgba(17,227,251,1),rgba(91,230,255,1),rgba(181,246,253,1),rgba(17,227,251,1))] bg-clip-text text-2xl text-transparent max-[768px]:text-[7vw]">
              AI & Metaverse
            </p>
            <p className="font-montserrat text-white text-center">
              Enter a realm where AI drives immersive Metaverse encounters,
              pushing boundaries of what&apos;s possible.
            </p>
          </div>
        </div>

        <div
          className="mt-2 h-[40vw] rounded-[2.5vw] p-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.63,0.15,0.03,1.12)] max-[768px]:relative max-[768px]:top-0 max-[768px]:left-0 max-[768px]:!mb-[10px] max-[768px]:h-[130vw] max-[768px]:w-[70vw] md:relative md:w-[26%] md:h-[32vw] relative overflow-hidden group"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="lottie-wrapper absolute inset-0 flex justify-center items-center z-10">
            <Lottie 
              animationData={Web} 
              height={10} 
              lottieRef={(ref) => (lottieRefs.current[1] = ref)}
              autoplay={true}
              loop={true}
            />
          </div>

          <div className="overlay absolute inset-0 z-20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[rgba(54,54,54,0.9)] rounded-[2.5vw] flex flex-col justify-center items-center text-center px-5">
            <p className="font-montserrat -webkit-bg-clip-text mb-4 bg-[linear-gradient(to_bottom_right,rgba(17,227,251,1),rgba(91,230,255,1),rgba(181,246,253,1),rgba(17,227,251,1))] bg-clip-text text-2xl text-transparent max-[768px]:text-[7vw]">
              Web
            </p>
            <p className="font-montserrat text-white text-center">
              Crafting dynamic, responsive websites that deliver exceptional user
              experiences across all devices.
            </p>
          </div>
        </div>

        <div
          className="mt-2 h-[40vw] rounded-[2.5vw] p-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.63,0.15,0.03,1.12)] max-[768px]:relative max-[768px]:top-0 max-[768px]:left-0 max-[768px]:mb-[10px] max-[768px]:h-[130vw] max-[768px]:w-[70vw] md:relative md:w-[26%] md:h-[32vw] relative overflow-hidden group"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <div className="lottie-wrapper absolute inset-0 flex justify-center items-center z-10">
            <Lottie 
              animationData={Block} 
              height={10} 
              lottieRef={(ref) => (lottieRefs.current[2] = ref)}
              autoplay={true}
              loop={true}
            />
          </div>

          <div className="overlay absolute inset-0 z-20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[rgba(54,54,54,0.9)] rounded-[2.5vw] flex flex-col justify-center items-center text-center px-5">
            <p className="font-montserrat -webkit-bg-clip-text mb-4 bg-[linear-gradient(to_bottom_right,rgba(17,227,251,1),rgba(91,230,255,1),rgba(181,246,253,1),rgba(17,227,251,1))] bg-clip-text text-2xl text-transparent max-[768px]:text-[7vw]">
              Blockchain
            </p>
            <p className="font-montserrat text-white text-center">
              Building the decentralized future with secure, transparent
              blockchain solutions and smart contracts.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto my-5 h-px w-[80%] bg-gradient-to-r from-transparent via-white/50 to-transparent md:hidden"></div>

      <div className="pds-page-poster-wrapper mb-[50px] flex items-center justify-center no-underline">
        <Link href="/pds" style={{ textDecoration: "none" }}>
          <div className="pds-page-poster flex w-[85vw] items-center justify-center rounded-[30px] bg-[rgba(70,69,69,0.2)] no-underline max-md:mt-[20px] max-md:w-[70vw] max-md:flex-col max-md:px-[10px] max-md:pt-[30px] max-md:pb-[30px]">
            <div className="pds-page-poster-left w-[45vw] font-extrabold no-underline max-md:w-[70vw] max-md:px-[50px]">
              <h1 className="font-montserrat bg-gradient-to-br from-[#11e3fb] via-[#5be6ff] to-[#11e3fb] bg-clip-text py-[10px] text-[3vw] text-transparent no-underline max-md:py-[10px] max-md:text-center max-md:text-[4vw]">
                Still Getting Stuck in PDS?
              </h1>
              <h2 className="font-montserrat py-[10px] text-[1.5vw] text-[aliceblue] max-md:py-[10px] max-md:text-center max-md:text-[3vw]">
                Our curated PDS Problems set works right for you...
              </h2>
            </div>
            <div className="pds-page-poster-right mb-[25px] ml-[10px] flex items-center justify-center max-md:m-[20px]">
              <Image
                className="w-[35vw] max-md:w-[60vw]"
                src={programmer}
                alt="img"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}