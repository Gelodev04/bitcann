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
    

    <div className="absolute bg-[#313131] w-full rounded-b-[20px] max-w-[600px] overflow-hidden">
      <ul className="">
        {domainResults.map((result, index) => (
          <li key={index} className="flex justify-between items-center  border-b  last:border-b-0 border-b-[#1B1B1B] cursor-pointer px-[3rem] py-[0.9rem] hover:bg-[#666666] duration-100 ease-out">
            <span className="text-white font-[400] text-[16px]">{result.name}</span>
            <span className="text-[#27A1FA] font-[400] text-[16px]">{result.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
