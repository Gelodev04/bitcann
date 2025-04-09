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
      <h2 className="font-light">Ending in:</h2>
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center ">
          <span className="font-bold text-[20px]">{unit.value}</span>
          <span className="text-[11px]  ">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};
