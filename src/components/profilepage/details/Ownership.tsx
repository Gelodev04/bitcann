import React from "react";

export const Ownership = () => {
  const recordsDetails = [
    { label: "BCH Address", value: "bitcoincash:qwerwewet" },
    { label: "ETH Address", value: "0xgegfrtherthjerje" },
    { label: "Owner", value: "bitcoincash:qwerwewet" },
    { label: "Running Bid", value: "0.01 BCH" },
    
  ];

  return (
    <div className="w-full  mx-auto relative">
      {/* Edit button */}
      <div className="flex justify-end ">
        <button className="bg-[#666666] text-white px-4 py-1 rounded-md text-sm absolute top-[-2.2rem]">
          Edit
        </button>
      </div>

      {/* Table */}
      <div className="rounded-[20px] overflow-hidden border border-[#444] bg-[#272727] ">
        {recordsDetails.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-[5rem]  py-[1rem] border-b border-[#444] last:border-0  text-white"
          >
            <span className="opacity-70">{item.label}</span>
            <span className="text-[#27A1FA] font-semibold">{item.value}</span>
          </div>
        ))}

        {/* Add New Record Button */}
        <div className="flex items-center gap-2 px-[5rem] py-3 text-white hover:bg-[#333] cursor-pointer">
          <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
            +
          </div>
          <span>Add New Record</span>
        </div>
      </div>
    </div>
  );
};
