"use client";
import { useState } from "react";
import React from "react";

export default function SearchDropdown() {
  const domainResults = [
    { name: "romit.sat", status: "Available" },
    { name: "romit.bch", status: "Registered" },
    { name: "zapit.bch", status: "Auction" },
  ];

  return (
    <div className="absolute   border border-[#686868] w-full rounded-b-[20px] border-t-0 top-[2.5rem] bg-[#272727] z-[-1]">
      <ul className="mt-[1rem] ">
        {domainResults.map((result, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-[3rem] py-[0.9rem] hover:bg-[#313131]  border-b  last:border-b-0 border-b-[#1B1B1B] cursor-pointer "
          >
            <div className="flex items-center  justify-between w-full ">
              <span className="text-white font-[400] text-[16px]">
                {result.name}
              </span>
              <span className="text-[#27A1FA] font-[400] text-[16px]">
              {result.status}
            </span>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
