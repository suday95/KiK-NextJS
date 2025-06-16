import Image from "next/image";

function Card() {
  return (
    <>
      <style jsx>{`
        .fade-wipe {
          /* fully opaque over the whole card before hover */
          mask-image: linear-gradient(
            to right,
            black 0%,
            black 33%,
            transparent 33%,
            transparent 100%
          );
          mask-size: 300% 100%;
          mask-position: 0% 0%;
          transition: mask-position 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-mask-image: linear-gradient(
            to right,
            black 0%,
            black 33%,
            transparent 33%,
            transparent 100%
          );
          -webkit-mask-size: 300% 100%;
          -webkit-mask-position: 0% 0%;
          -webkit-transition: -webkit-mask-position 1.2s
            cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover .fade-wipe {
          mask-position: 100% 0%;
          -webkit-mask-position: 100% 0%;
        }

        .fade-wipe-overlay {
          /* same opaque-then-transparent stops, delayed */
          mask-image: linear-gradient(
            to right,
            black 0%,
            black 33%,
            transparent 33%,
            transparent 100%
          );
          mask-size: 300% 100%;
          mask-position: 0% 0%;
          transition: mask-position 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
          -webkit-mask-image: linear-gradient(
            to right,
            black 0%,
            black 33%,
            transparent 33%,
            transparent 100%
          );
          -webkit-mask-size: 300% 100%;
          -webkit-mask-position: 0% 0%;
          -webkit-transition: -webkit-mask-position 1.2s
            cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
        }
        .group:hover .fade-wipe-overlay {
          mask-position: 100% 0%;
          -webkit-mask-position: 100% 0%;
        }
      `}</style>

      {/* wrapper now owns border & shadow */}
      <div
        className="group relative z-10 box-border w-[100%] overflow-hidden"
        style={{
          aspectRatio: "674/381",
          boxShadow:
            "10px 10px 20px 0px #218ACB33, -10px -10px 20px 0px #11E3FB33",
          border: "1px solid transparent",
          borderImage: "linear-gradient(45deg, #11e3fb, #ffffff, #218acb) 1",
          borderImageSlice: 1,
        }}
      >
        {/* inner card content, full width & height */}
        <div className="relative z-10 flex h-full w-full flex-col font-sans">
          <div className="absolute top-1 left-1 h-full w-full">
            <div className="bg-[linear-gradient(236.43deg,_#218ACB_18.56%,_#0CC5DA_59.05%,_#11E3FB_79.29%)] bg-clip-text p-3 font-bold text-transparent">
              {"</>"}
            </div>
          </div>
          <div className="p-3 text-center text-2xl font-bold">
            <span className="bg-[linear-gradient(93deg,_#11E3FB_22.8%,_#0CC5DA_48.35%,_#218ACB_93.9%)] bg-clip-text text-transparent">
              dekodeX
            </span>
          </div>
          <div className="mt-0 hidden flex-col p-5 md:mt-3 md:flex">
            <p className="text-center text-xs md:text-sm lg:text-base">
              Step into the arena of logic, speed, and precision. dekodeX is a
              thrilling coding event that brings together sharp minds to solve
              challenging problems, climb leaderboards, and showcase true
              programming grit. Whether you're a beginner or a pro, it's your
              time to shine. Are you ready to deKode the impossible?
            </p>
            <div className="mt-3 flex flex-row items-center justify-start gap-2">
              <Image
                src="/deKodeX/calendar.png"
                alt="calendar"
                width={24}
                height={24}
                className="h-6 w-6 bg-transparent"
              />
              <span className="text-xs text-white md:text-sm lg:text-base">
                Date : 18/06/2025 - 27/06/2025
              </span>
            </div>
            <div className="mt-3 flex flex-row items-center justify-start gap-2">
              <Image
                src="/deKodeX/format.png"
                alt="format"
                width={24}
                height={24}
                className="h-6 w-6 bg-transparent"
              />
              <span className="text-xs text-white md:text-sm lg:text-base">
                Format : Solo
              </span>
            </div>
            <span className="mt-5 bg-[linear-gradient(93deg,_#11E3FB_22.8%,_#0CC5DA_48.35%,_#218ACB_93.9%)] bg-clip-text text-center text-xl font-bold text-transparent">
              Click to Register
            </span>
          </div>
        </div>

        {/* color overlay */}
        <div
          className="fade-wipe-overlay pointer-events-none absolute z-20 bg-[#01011B]/80"
          style={{ top: "-1px", right: "-1px", bottom: "-1px", left: "-1px" }}
        />

        {/* image layer perfectly aligned */}
        <div
          className="fade-wipe pointer-events-none absolute z-30"
          style={{ top: "-1px", right: "-1px", bottom: "-1px", left: "-1px" }}
        >
          <Image
            src="/theme.png"
            alt="deKodeX Theme"
            fill
            className="h-full w-full object-cover object-center"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
