import React from "react";

const variants = {
  default: "border border-white/10 bg-[#202635] text-white",
  danger: "border border-[#582233] bg-[#2B1820] text-[#FF4D73]",
  low: "bg-[#2A3040] text-white",
  out: "bg-[#E6365E] text-white",
  muted: "border border-white/5 bg-[#2C2F37] text-white/35",
};

const StatusBadge = ({ children, type = "default" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold ${variants[type]}`}
    >
      {children}
    </span>
  );
};

export default StatusBadge;