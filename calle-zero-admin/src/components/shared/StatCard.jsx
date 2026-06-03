import React from "react";
import * as Icons from "lucide-react";
import SectionCard from "./SectionCard";

const StatCard = ({
  title,
  value,
  helper,
  change,
  changeType,
  icon,
  highlighted = false,
}) => {
  const IconComponent = Icons[icon] || Icons.Box;

  return (
    <SectionCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-[Open_Sans] text-[14px] text-white/72">{title}</p>

          <h3 className="mt-2 font-[Montserrat] text-[26px] font-extrabold text-white">
            {value}
          </h3>

          {(helper || change) && (
            <div className="mt-4 flex items-center gap-3">
              {change ? (
                <span
                  className={`rounded-full px-2 py-1 text-[12px] font-bold ${
                    changeType === "negative"
                      ? "bg-[#2B1820] text-[#FF4D73]"
                      : "text-white"
                  }`}
                >
                  {change}
                </span>
              ) : null}

              {helper ? (
                <span className="font-[Open_Sans] text-[13px] text-white/65">
                  {helper}
                </span>
              ) : null}
            </div>
          )}
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${
            highlighted ? "bg-[#2F2343] text-[#B56CFF]" : "bg-white/5 text-white/25"
          }`}
        >
          <IconComponent size={22} strokeWidth={2} />
        </div>
      </div>
    </SectionCard>
  );
};

export default StatCard;