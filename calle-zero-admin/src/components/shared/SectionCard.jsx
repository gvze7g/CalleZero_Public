import React from "react";

const SectionCard = ({ children, className = "" }) => {
  return (
    <section
      className={`rounded-[16px] border border-white/5 bg-[#1A1F2B] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionCard;