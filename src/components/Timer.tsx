import React from "react";

export const Timer = () => {
  const timeUnits = [
    { label: "Days", value: "01" },
    { label: "Hours", value: "23" },
    { label: "Minutes", value: "30" },
    { label: "Seconds", value: "06" },
  ];

  return (
    <div className="flex items-center gap-3 text-white  ">
      <h2 className="font-semibold">Ending in:</h2>
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center ">
          <span className="relative font-bold text-[20px] bg-[#666666] w-[35px] rounded-[6px] py-[5px] text-center">
            {unit.value}

            <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B1B1B]  -translate-y-1/2"></span>

            <span className="absolute top-1/2 left-0 w-[4px] h-[6px] bg-[#1B1B1B]    -translate-y-1/2 -translate-x-1/2"></span>

            <span className="absolute top-1/2 right-0 w-[4px] h-[6px] bg-[#1B1B1B]    -translate-y-1/2 translate-x-1/2"></span>
          </span>

          <span className="text-[10px]  ">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};
