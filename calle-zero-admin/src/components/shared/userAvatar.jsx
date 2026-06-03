import React from "react";

const colorMap = {
  CM: "bg-orange-500",
  ER: "bg-rose-600",
  RG: "bg-amber-500",
  AP: "bg-sky-500",
  KV: "bg-blue-600",
  RM: "bg-blue-600",
  EV: "bg-pink-600",
  CF: "bg-neutral-300 text-black",
  GZ: "bg-amber-700",
  MA: "bg-orange-500",
  HS: "bg-neutral-500",
  CP: "bg-stone-300 text-black",
  TS: "bg-gray-200 text-black",
  GS: "bg-zinc-200 text-black",
  CN: "bg-orange-300 text-black",
};

const UserAvatar = ({ label }) => {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full text-[12px] font-bold ${colorMap[label] || "bg-violet-600"}`}
    >
      {label}
    </div>
  );
};

export default UserAvatar;