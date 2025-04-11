"use client";

import { AccountDown } from "@/components/svg/AccountDown";
import { Copy } from "@/components/svg/Copy";
import { Disconnect } from "@/components/svg/Disconnect";
import React, { useState } from "react";

export const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left text-[15px]  w-[130px]">
      {/* Header Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={` cursor-pointer  bg-[#313131]  px-[0.9rem]  gap-[1px]  h-[40px] hover:bg-[#666666] duration-100 ease-out ${
          isOpen ? "rounded-t-[10px]" : "rounded-[10px]"
        }`}
      >
        <div
          className={`flex items-center h-full justify-center py-[7px] border-b border-t border-t-transparent  ${
            isOpen ? "border-[#666666]" : "border-transparent"
          }`}
        >
          <span className="truncate font-semibold  overflow-hidden text-ellipsis whitespace-nowrap flex-grow ">
            zpvj....j0667h
          </span>
          <span className="flex-shrink-0">
            <AccountDown />
          </span>
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute left-0  w-full bg-[#313131] rounded-b-[10px] px-[0.9rem] py-[7px] shadow-lg z-10 min-h-[40px]  pt-2">
          <div className="flex flex-col items-start gap- text-[14px]">
            <button className="flex items-center gap-2 cursor-pointer hover:bg-[#666666] duration-100 ease-out w-full p-1 rounded-[2px]">
              <Copy size="15" />
              <span>Copy</span>
            </button>
            <button className="flex items-center gap-2 cursor-pointer hover:bg-[#666666] duration-100 ease-out w-full p-1 rounded-[2px]">
              <Disconnect/>
              <span>Disconnect</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
