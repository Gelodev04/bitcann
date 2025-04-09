"use client";
import { Add } from "@/components/svg/Add";
import { Check } from "@/components/svg/Check";
import { Edit } from "@/components/ui/buttons/Edit";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export const Records = () => {
  const [isEditing, setIsEditing] = useState(false);
  const recordsDetails = [
    { label: "BCH Address", value: "bitcoincash:qwerwewet" },
    { label: "ETH Address", value: "0xgegfrtherthjerje" },
    { label: "Owner", value: "bitcoincash:qwerwewet" },
    { label: "Running Bid", value: "0.01 BCH" },
  ];

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="w-full  mx-auto relative">
      {/* Edit button */}
      <div className="flex justify-end ">
        <Edit onClick={handleEditClick} />
      </div>

      {/* Table */}
      <div className="rounded-[20px] overflow-hidden border border-[#444] bg-[#272727] ">
        {recordsDetails.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-[5.1rem]  py-[1rem] border-b border-[#444] last:border-0  text-white relative"
          >
            <span className="opacity-70">{item.label}</span>
            <span className="text-[#27A1FA] font-semibold">{item.value}</span>
            {isEditing && (
              <button className="absolute right-[1.5rem] bg-[#555555] p-1 rounded-[5px]">
                <Image
                  src="/svg/delete.svg"
                  alt="delete"
                  width={14}
                  height={14}
                  className="cursor-pointer"
                />
              </button>
            )}
          </div>
        ))}

        {/* Add New Record Button */}
        {isEditing ? (
          // Show input when editing
          <div className="flex items-center gap-2 px-[5.1rem] py-3 text-white">
            <input
              type="text"
             
              className="w-full bg-[#333333]  rounded-[8px] px-4 py-1 text-white focus:outline-none focus:ring-2 focus:ring-[#27A1FA]"
            />
            <input
              type="text"
             
              className="w-full bg-[#333333] rounded-[8px] px-4 py-1 text-white focus:outline-none focus:ring-2 focus:ring-[#27A1FA]"
            />
            <button className="bg-[#328F3F] p-1 rounded-[5px] absolute right-[3.3rem] cursor-pointer">
                <Check/>
            </button>
            <button className="absolute right-[1.5rem] bg-[#555555] p-1 rounded-[5px]">
                <Image
                  src="/svg/delete.svg"
                  alt="delete"
                  width={14}
                  height={14}
                  className="cursor-pointer"
                />
              </button>
          </div>
        ) : (
          // Show Add New Record button when not editing
          <div className="flex items-center gap-2 px-[5.1rem] py-3 text-white hover:bg-[#333] cursor-pointer">
            <button className="p-3 rounded-full flex items-center justify-center bg-[#555555]">
              <Add/>
            </button>
            <span>Add New Record</span>
          </div>
        )}
      </div>
    </div>
  );
};
