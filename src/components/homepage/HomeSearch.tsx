"use client";
import { useState } from "react";
import React from "react";
import SearchDropdown from "./SearchDropdown";

export default function HomeSearch() {
  const [isFocused, setIsFocused] = useState(false);
  return (
   

    <div className={`bg-[#313131] w-full max-w-[600px] mx-auto  relative ${isFocused ? "rounded-b-0 rounded-t-[20px]" : "rounded-[20px]"}`}>
      <input
        type="text"
        onFocus={() => setIsFocused(true)}
         onBlur={() => setTimeout(() => setIsFocused(false), 0)}
        className="w-full text-center text-white rounded-[20px] text-[16px] tracking-wide focus:outline-0 border border-[#686868] h-[3.5rem] "
        placeholder="Search for a name"
      />

      {isFocused && <SearchDropdown />}
    </div>
  );
}
