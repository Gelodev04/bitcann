// ProfileDetails.tsx
"use client";
import { useState } from "react";
import React from "react";
import { Profile } from "./details/Profile";
import { Records } from "./details/Records";
import { PlaceBid } from "../ui/buttons/PlaceBid";

export default function ProfileDetails() {
  const tabs = ["Profile", "Records", "Ownership"];
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="w-full flex flex-col">
      {/* Tabs */}
      <div className="border-b-[4px] border-[#666666] mb-[5rem] flex justify-between items-center flex-col-reverse gap-2 sm:flex-row">
        <div className="inline-flex bg-[#333333] rounded-t-[5px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`text-white hover:bg-[#666666] py-[7px] rounded-t-[5px]  cursor-pointer w-[100px]   text-[15px]  text-center ${
                activeTab === tab ? "bg-[#666666]" : ""
              }`}
            >
             {tab}
            </div>
          ))}
        </div>
        <PlaceBid text="Place Bid"/>
      </div>

 
      <div className="flex-1 min-h-[400px]">
        {activeTab === "Profile" && <Profile />}
        {activeTab === "Records" && <Records />}
        {activeTab === "Ownership" && <div className="text-white">Ownership Content Here</div>}
      </div>
    </div>
  );
}
