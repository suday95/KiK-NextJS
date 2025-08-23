import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/newLandingImage/8.png", // Left
  "/newLandingImage/7.png", // Center
  "/newLandingImage/9.png", // Right
];

export default function TeamsCombined() {
  const [currentIndex, setCurrentIndex] = useState(1); // Middle card
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;
    if (isDesktop) {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { x: 0, y: 0, scale: 1, rotationY: 0, zIndex: 5 });
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      })
      .to(cardRefs.current[0], {
        x: "-380px",
        y: -20,
        z: 120,
        rotationY: -35,
        scale: 0.85,
        duration: 1,
      })
      .to(cardRefs.current[1], {
        x: 0,
        y: 0,
        z: 250,
        rotationY: 0,
        scale: 1,
        duration: 1,
      }, "<")
      .to(cardRefs.current[2], {
        x: "380px",
        y: -20,
        z: 120,
        rotationY: 35,
        scale: 0.85,
        duration: 1,
      }, "<");
    }
  }, []);

  // Carousel interaction
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="h-[50vw] relative flex flex-col gap-15 items-center justify-items-start bg-[#00002C] py-2">
      {/* Heading */}
     <h2
        id="recentHeader"
        className="my-8 bg-gradient-to-br from-[#11E3FB] via-[#5BE6FF] to-[#11E3FB] [background-clip:text] text-center text-[48px] font-bold text-transparent [-webkit-background-clip:text]"
      >
        Our Contributions
      </h2>

      {/* Cards */}
      <div
        className="cards-wrapper relative flex h-[420px] w-full max-w-7xl items-center justify-center overflow-visible"
        style={{ perspective: "1600px" }}
      >
        {images.map((src, index) => {
          const position = (index - currentIndex + images.length) % images.length;

          let transformStyle = "";
          let zIndex = 0;
          let opacity = 1;
          let filter = "none";
          let boxShadow = "0px 15px 40px rgba(0, 0, 0, 0.5), 0px 25px 60px rgba(0,0,0,0.3)";

          if (position === 0) {
            transformStyle = "translateX(-380px) translateY(-20px) translateZ(120px) rotateY(-35deg) scale(0.85)";
            zIndex = 2;
            opacity = 0.95;
            filter = "brightness(0.95)";
            boxShadow = "-20px 20px 35px rgba(1,0,34,0.7), -10px 10px 50px rgba(1,0,34,0.5)";
          } else if (position === 1) {
            transformStyle = "translateX(0) translateY(0) translateZ(250px) rotateY(0deg) scale(1)";
            zIndex = 4;
            opacity = 1;
            filter = "none";
            boxShadow = "0px 20px 50px rgba(1,0,34,0.8), 0px 35px 80px rgba(1,0,34,0.6)";
          } else if (position === 2) {
            transformStyle = "translateX(380px) translateY(-20px) translateZ(120px) rotateY(35deg) scale(0.85)";
            zIndex = 2;
            opacity = 0.95;
            filter = "brightness(0.95)";
            boxShadow = "20px 20px 35px rgba(1,0,34,0.7), 10px 10px 50px rgba(1,0,34,0.5)";
          } else {
            transformStyle = "translateX(0) translateZ(-500px) scale(0.6)";
            zIndex = 0;
            opacity = 0;
          }

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
                filter,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={src}
                alt={`Card ${index}`}
                width={300}
                height={400}
                className="rounded-2xl"
                style={{ boxShadow }}
              />
            </div>
          );
        })}

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 -translate-y-1/2 rounded-full bg-gray-800/60 p-3 text-white hover:bg-gray-700"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 rounded-full bg-gray-800/60 p-3 text-white hover:bg-gray-700"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
