import React from "react";
import { HelpCircle } from "lucide-react";
import logo from "../../assets/logo-1.png";

const AuthHeader = () => {
  return (
    <header className="flex h-[88px] items-center justify-between border-b border-[#1A1930] px-4 md:px-8">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Calle Zero"
          className="h-12 w-12 object-contain md:h-14 md:w-14"
        />

        <span className="font-[Montserrat] text-[20px] font-extrabold tracking-[-0.02em] text-[#B56CFF] md:text-[21px]">
          Calle Zero Admin
        </span>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 font-[Open_Sans] text-[14px] font-semibold text-white/85 transition hover:text-white"
      >
        <HelpCircle size={15} strokeWidth={2.2} />
        <span>Soporte</span>
      </button>
    </header>
  );
};

export default AuthHeader;