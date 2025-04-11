import { DownArrow } from "@/components/svg/DownArrow";
import React from "react";

export const ButtonAuction = ({text}: {text: string}) => {
  return (
    <button className="text-white cursor-pointer bg-[#313131] rounded-[10px] py-[0.3rem] min-w-[110px] flex items-center gap-2 justify-center hover:bg-[#666666] duration-100 ease-out">
      <span>{text}</span>
      <DownArrow/>
    </button>
  );
};
