import React from "react";

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  rightElement,
  value,
  onChange,
  name,
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <label className="block font-[Open_Sans] text-[14px] font-bold text-white/95">
        {label}
      </label>

      <div className="relative">
        {Icon ? (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/65">
            <Icon size={18} strokeWidth={2} />
          </div>
        ) : null}

        <input
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          placeholder={placeholder}
          className="h-[44px] w-full rounded-[12px] border border-[#5F5877] bg-black px-12 pr-12 font-[Open_Sans] text-[15px] text-white outline-none transition placeholder:text-white/45 focus:border-[#B56CFF]"
        />

        {rightElement ? (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/65">
            {rightElement}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AuthInput;