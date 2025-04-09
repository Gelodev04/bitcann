import React from "react";

export const Profile = () => {
  const profileDetails = [
    { label: "Registered On", value: "5th March 2025" },
    { label: "Expected Expiry", value: "5th March 2028 (i)" },
    { label: "Owner", value: "bitcoincash:qwerwewet" },
    { label: "Running Bid", value: "0.01 BCH" },
  ];

  return (
  
     
      <div className="w-full bg-[#272727] rounded-[20px] border-[#444] border">
        {profileDetails.map((detail, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-[1rem] px-[5rem] border-b border-[#444] last:border-b-0"
          >
            <span className="text-[#C1C1C1] font-[400] text-[16px]">
              {detail.label}
            </span>
            <span className="text-white font-[400] text-[16px]">
              {detail.value}
            </span>
          </div>
        ))}
      </div>
  
  );
};
