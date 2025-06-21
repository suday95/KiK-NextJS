'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import robo from '../public/robo.png';
import notebook from '../public/notebook.png';
import computer from '../public/computer.png';
import '../styles/style.css';

export default function Home() {
  useEffect(() => {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
      feature.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.02)';
      });
      feature.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/\d/g, '');
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= numericValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
              } else {
                stat.textContent = Math.floor(currentValue) + suffix;
              }
            }, 50);
          });
        }
      });
    });

    document.querySelectorAll('.stats').forEach(stats => {
      observer.observe(stats);
    });

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

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(rippleStyle);
  }, []);

  return (
    <main>
      <div className="floating-elements-top">
        <div className="floating-element-top"></div>
        <div className="floating-element-top"></div>
        <div className="floating-element-top"></div>
      </div>

      <div className="container">
        <header className="header">
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Master Programming Through Practice</h1>
              <p className="hero-subtitle">
                Comprehensive collection of lab and theory problems designed to enhance your programming skills and computer science knowledge.
              </p>
            </div>
            <div className="hero-visual">
              <div className="floating-card">
                <Image src={computer} alt="Computer" width={300} height={300} />
              </div>
            </div>
          </div>
        </header>

        <section className="problems-section" id="problems">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-subtitle">
            Select from our curated problem sets designed for different learning objectives and skill levels.
          </p>
        </section>

        <div className="floating-elements"></div>

        <div className="container">
          <div className="cards-wrapper">
            <div className="main-card">
              <div className="card-content">
                <div className="mascot-container">
                  <div className="penguin">
                    <Image src={robo} alt="Robo" width={100} height={100} style={{ borderRadius: '50%' }} />
                  </div>
                  <div className="lab-elements">
                    <div className="circuit"></div>
                    <div className="circuit"></div>
                    <div className="circuit"></div>
                  </div>
                </div>
                <h1 className="title">Lab Problems</h1>
                <button className="cta-button" onClick={() => window.location.href = '#lab-problems'}>
                  See Problems
                </button>
              </div>
            </div>

            <div className="main-card">
              <div className="card-content">
                <div className="mascot-container">
                  <div className="theory-icon">
                    <Image src={notebook} alt="Notebook" width={100} height={100} style={{ borderRadius: '50%' }} />
                  </div>
                  <div className="lab-elements">
                    <div className="circuit"></div>
                    <div className="circuit"></div>
                    <div className="circuit"></div>
                  </div>
                </div>
                <h1 className="title">Theory Problems</h1>
                <button className="cta-button" onClick={() => window.location.href = '#theory-problems'}>
                  See Problems
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}