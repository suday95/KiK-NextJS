'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import robo from './assets/robo.png';
import notebook from './assets/notebook.png';
import computer from './assets/computer.png';
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('click', function (e) {
        const ripple = document.createElement('div');
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

    if (!document.getElementById('ripple-keyframes')) {
      const rippleStyle = document.createElement('style');
      rippleStyle.id = 'ripple-keyframes';
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
    <main className="min-h-screen bg-[#01011b] text-white overflow-x-hidden relative font-[kanit] ">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
        <div className="absolute bg-cyan-400/20 rounded-full animate-float w-[100px] h-[100px] top-[20%] left-[10%]" style={{animationDelay:'0s'}}></div>
        <div className="absolute bg-cyan-400/20 rounded-full animate-float w-[80px] h-[80px] top-[10%] left-[36%]" style={{animationDelay:'2s'}}></div>
        <div className="absolute bg-cyan-400/20 rounded-full animate-float w-[80px] h-[80px] top-[2%] left-[6%]" style={{animationDelay:'4s'}}></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <header className="pt-8 pb-2 relative">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-10 md:mb-30">
            <div className="flex-1">
              <h1 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] mb-6 bg-gradient-to-br from-white to-[#e0e0ff] bg-clip-text text-transparent">Master Programming Through Practice</h1>
              <p className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] mb-10 max-w-[500px] font-bold">
                Comprehensive collection of lab and theory problems designed to enhance your programming skills and computer science knowledge.
              </p>
            </div>
            <div className="flex-1 relative flex justify-center items-center">
              <div className="rounded-[24px] p-8 relative flex justify-center items-center animate-[float_4s_ease-in-out_infinite] bg-transparent">
                <Image src={computer} alt="Computer" width={350} height={350} />
              </div>
            </div>
          </div>
        </header>
        <div className="jsx-44e2f37957c96ba0 animate-shimmer  h-1 w-full bg-gradient-to-r from-transparent via-[#87CEEB] to-transparent"></div>
        <section className="mb-20 mt-20" id="problems">
          <h2 className="text-center text-[32px] md:text-[48px] font-bold mb-4 bg-gradient-to-br from-white to-[#e0e0ff] bg-clip-text text-transparent">Choose Your Path</h2>
          <p className="text-center text-[18px] text-white/60 max-w-[600px] mx-auto">
            Select from our curated problem sets designed for different learning objectives and skill levels.
          </p>
        </section>


        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 min-h-screen items-center content-center">
            <div className="relative bg-[rgba(26,26,46,0.8)] border-2 border-cyan-400 rounded-[20px] p-10 md:p-16 backdrop-blur-[10px] shadow-[0_20px_40px_rgba(0,212,255,0.1)] flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,212,255,0.2)] ">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="relative w-[140px] md:w-[200px] h-[140px] md:h-[200px] mb-5 md:mb-8 bg-gradient-to-br from-cyan-400 to-cyan-700 rounded-full flex items-center justify-center  animate-float">
                  <Image src={robo} alt="Robo" width={100} height={100} style={{ borderRadius: '50%' }} />
                  <div className="hidden md:block absolute w-10 h-10 bg-[rgba(0,76,153,0.3)] border-2 border-cyan-400 rounded-lg animate-[pulse_3s_ease-in-out_infinite]" style={{top:'20%', left:'10%', animationDelay:'0s'}}></div>
                  <div className="hidden md:block absolute w-10 h-10 bg-[rgba(0,76,153,0.3)] border-2 border-cyan-400 rounded-lg animate-[pulse_3s_ease-in-out_infinite]" style={{top:'70%', right:'10%', animationDelay:'1s'}}></div>
                  <div className="hidden md:block absolute w-10 h-10 bg-[rgba(0,76,153,0.3)] border-2 border-cyan-400 rounded-lg animate-[pulse_3s_ease-in-out_infinite]" style={{top:'40%', right:'20%', animationDelay:'2s'}}></div>
                </div>
                <h1 className="text-[1.6rem] md:text-[2.2rem] font-bold uppercase tracking-wider bg-gradient-to-br from-cyan-400 to-white bg-clip-text text-transparent mb-4">Lab Problems</h1>
                <Link href="pds/lab">
                <button className=" cursor-pointer cta-button bg-gradient-to-r from-cyan-400 to-cyan-700 text-white py-3 px-8 text-[1.1rem] font-semibold rounded-full uppercase tracking-wide shadow-[0_10px_30px_rgba(0,212,255,0.3)] mt-auto relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)]" onClick={() => window.location.href = '#lab-problems'}>
                  See Problems
                </button>
                </Link>
              </div>
            </div>

            <div className="relative bg-[rgba(26,26,46,0.8)] border-2 border-cyan-400 rounded-[20px] p-10 md:p-16 backdrop-blur-[10px] shadow-[0_20px_40px_rgba(0,212,255,0.1)] flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,212,255,0.2)]">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="relative w-[140px] md:w-[200px] h-[140px] md:h-[200px] mb-5 md:mb-8 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] rounded-full flex items-center justify-center animate-float">
                  <Image src={notebook} alt="Notebook" width={100} height={100} style={{ borderRadius: '50%' }} />
                  <div className="hidden md:block absolute w-10 h-10 bg-[rgba(0,76,153,0.3)] border-2 border-cyan-400 rounded-lg animate-[pulse_3s_ease-in-out_infinite]" style={{top:'20%', left:'10%', animationDelay:'0s'}}></div>
                  <div className="hidden md:block absolute w-10 h-10 bg-[rgba(0,76,153,0.3)] border-2 border-cyan-400 rounded-lg animate-[pulse_3s_ease-in-out_infinite]" style={{top:'70%', right:'10%', animationDelay:'1s'}}></div>
                  <div className="hidden md:block absolute w-10 h-10 bg-[rgba(0,76,153,0.3)] border-2 border-cyan-400 rounded-lg animate-[pulse_3s_ease-in-out_infinite]" style={{top:'40%', right:'20%', animationDelay:'2s'}}></div>
                </div>
                <h1 className="text-[1.6rem] md:text-[2.2rem] font-bold uppercase tracking-wider bg-gradient-to-br from-cyan-400 to-white bg-clip-text text-transparent mb-4">Theory Problems</h1>
                <Link href="/pds/theory">
                <button className="cursor-pointer cta-button bg-gradient-to-r from-cyan-400 to-cyan-700 text-white py-3 px-8 text-[1.1rem] font-semibold rounded-full uppercase tracking-wide shadow-[0_10px_30px_rgba(0,212,255,0.3)] mt-auto relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)]">
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