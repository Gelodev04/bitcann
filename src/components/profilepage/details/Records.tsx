"use client";
import { Add } from "@/components/svg/Add";
import { Check } from "@/components/svg/Check";
import { Delete } from "@/components/svg/Delete";
import { Edit } from "@/components/ui/buttons/Edit";
import Image from "next/image";
import React from "react";
import { useState, useRef, useEffect } from "react";

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

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full  mx-auto relative" ref={containerRef}>
      {/* Edit button */}
      <div className="flex justify-end ">
        <Edit onClick={handleEditClick} />
      </div>

      {/* Table */}
      <div className="rounded-[20px] overflow-x-auto border border-[#444] bg-[#272727] ">
        {recordsDetails.map((item, index) => (
          <div
            key={index}
            className=" py-[1rem] border-b border-[#444] last:border-0  text-white relative min-w-[700px] "
          >
            <div className="max-w-[800px]  px-[3.2rem]  mx-auto flex justify-between items-center ">
              <span className="opacity-70">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[#27A1FA] font-semibold">{item.value}</span>
                {isEditing && (
                  <button className=" bg-[#555555] p-1 rounded-[5px]">
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
            </div>
          </div>
        ))}

        {/* Add New Record Button */}
        <div className="w-full max-w-[800px] mx-auto px-[3.2rem] overflow-x-auto min-w-[700px]">
          {isEditing ? (
            // Show input when editing
            <div className="flex items-center justify-between gap-2  py-3 text-white  w-full ">
              <input
                type="text"
                className="w-full bg-[#333333]  rounded-[8px] px-4 py-1 text-white focus:outline-none focus:ring-2 focus:ring-[#27A1FA]"
              />
              <input
                type="text"
                className="w-full bg-[#333333] rounded-[8px] px-4 py-1 text-white focus:outline-none focus:ring-2 focus:ring-[#27A1FA]"
              />
              <div className="flex gap-2">
                <button className="bg-[#328F3F] p-1 rounded-[5px]  cursor-pointer right-0">
                  <Check />
                </button>
                <button className="  bg-[#555555] p-1 rounded-[5px] cursor-pointer">
                  <Delete />
                </button>
              </div>
            </div>
          ) : (
            // Show Add New Record button when not editing
            <div
              onClick={handleEditClick}
              className="flex items-center gap-2  py-3 text-white hover:bg-[#333] cursor-pointer   w-full  "
            >
              <button className="p-3 rounded-full flex items-center justify-center bg-[#555555]">
                <Add />
              </button>
              <span>Add New Record</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
