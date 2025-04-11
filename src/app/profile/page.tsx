// ProfilePage.tsx
import ProfileDetails from "@/components/profilepage/ProfileDetails";
import { Copy } from "@/components/svg/Copy";
import { Timer } from "@/components/Timer";
import Image from "next/image";
import React from "react";

export default function ProfilePage() {
 

  return (
    <main className="flex flex-col items-center w-full justify-center max-w-[900px] mx-auto pt-[2rem] min-h-screen px-5">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-[2rem] my-[8rem] flex-col sm:flex-row">
        <h1 className="text-white font-semibold text-[30px] flex items-center gap-3">
          <span>romit.bch</span>
          <button className="cursor-pointer">
            <Copy/>
          </button>
        </h1>
        <Timer />
      </div>

      {/* Tabs + Content */}
      <ProfileDetails />
    </main>
  );
}
