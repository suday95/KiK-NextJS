import React from "react";
import { X, Award } from "lucide-react";

export default function Modal({
  title = "Certificate Application",
  children,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(1,1,27,0.8)] backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl bg-neutral-800 shadow-2xl">
        {/* Header: Certificate Title */}
        <div className="flex items-center rounded-t-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
          <Award className="text-white" size={24} />
          <h2 className="ml-2 text-xl font-semibold text-white">{title}</h2>
          <button
            className="ml-auto cursor-pointer rounded-full p-1 transition-all hover:bg-white/20"
            onClick={onClose}
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Body: Application Form Container */}
        <div className="space-y-4 p-6">{children}</div>
      </div>
    </div>
  );
}
