"use client";
import { useState } from "react";
import React from "react";
import SearchDropdown from "./SearchDropdown";

export default function HomeSearch() {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <div className="relative w-full max-w-[600px]">
        <input
         onFocus={() => setIsFocused(true)}
         onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full text-center text-white rounded-[20px] text-[16px] tracking-wide focus:outline-[#24c5ff] focus:outline-[2px] border border-[#686868] h-[3.5rem] bg-[#313131] "
          type="text"
          placeholder="Search for a name"
        />
         {isFocused && <SearchDropdown />}
      </div>
    </div>
  );
}
