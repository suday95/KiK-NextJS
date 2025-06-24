import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function TechEventModal({
  title = "DekodeX",
  subtitle = "Apply for certificate",
  children,
  onClose,
}) {
  // Lock background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative w-11/12 max-w-xl overflow-hidden bg-transparent p-8 backdrop-blur-sm">
        {/* Tech Border Frame */}
        <div className="pointer-events-none absolute inset-0">
          {/* Main border */}
          <div className="absolute inset-2 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>

          {/* Corner cutouts - Top Left */}
          <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"></div>
          <div className="absolute top-2 left-2 h-4 w-4 bg-black"></div>

          {/* Corner cutouts - Top Right */}
          <div className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"></div>
          <div className="absolute top-2 right-2 h-4 w-4 bg-black"></div>

          {/* Corner cutouts - Bottom Left */}
          <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"></div>
          <div className="absolute bottom-2 left-2 h-4 w-4 bg-black"></div>

          {/* Corner cutouts - Bottom Right */}
          <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"></div>
          <div className="absolute right-2 bottom-2 h-4 w-4 bg-black"></div>

          {/* Circuit-like details */}
          <div className="absolute top-6 left-0 h-px w-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute top-10 left-0 h-px w-2 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute top-6 right-0 h-px w-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute top-10 right-0 h-px w-2 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>

          <div className="absolute bottom-6 left-0 h-px w-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute bottom-10 left-0 h-px w-2 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute right-0 bottom-6 h-px w-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute right-0 bottom-10 h-px w-2 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>

          {/* Glowing corner dots */}
          <div className="absolute top-1 left-1 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"></div>
          <div className="absolute top-1 right-1 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"></div>
          <div className="absolute bottom-1 left-1 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"></div>
          <div className="absolute right-1 bottom-1 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"></div>
        </div>

        {/* Content container with proper z-index */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="font-mono text-4xl tracking-wide text-cyan-400 drop-shadow-lg">
                {title}
              </h1>
              <p className="mt-1 font-mono text-xs text-cyan-200 uppercase">
                {subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer p-2 transition-colors hover:text-red-500"
            >
              <X size={24} className="text-cyan-300" />
            </button>
          </div>
          {/* Body */}
          <div className="space-y-4 font-mono text-sm text-cyan-200">
            {children}
          </div>
          {/* Footer */}
          <div className="mt-8 flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
