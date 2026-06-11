import React, { useState } from "react";

const AuthInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  rightElement,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-[Open_Sans] text-[13px] sm:text-[14px] font-semibold text-white/85">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {Icon && (
          <Icon
            size={18}
            strokeWidth={2}
            className="absolute left-3 sm:left-4 text-white/40 pointer-events-none"
          />
        )}

        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-[44px] sm:h-[46px] rounded-[10px] border border-white/10 bg-[#0F0F0F] pl-10 sm:pl-12 pr-4 font-[Open_Sans] text-[14px] sm:text-[15px] text-white placeholder-white/40 outline-none transition focus:border-white/20 focus:bg-[#171724]"
        />

        {rightElement && type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 sm:right-4 text-white/40 hover:text-white/60 transition"
          >
            {rightElement}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;