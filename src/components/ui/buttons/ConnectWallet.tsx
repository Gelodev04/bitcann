import React from "react";

export const ConnectWallet = ({ text }: { text: string }) => {
  return (
    <div className="min-w-[130px] h-[40px] flex items-center justify-center">
      <button className="bg-[#27A1FA] rounded-full py-[0.8rem] px-[2.2rem] cursor-pointer  duration-100 ease-out hover:bg-[#24c5ff] absolute whitespace-nowrap">
        {text}
      </button>
    </div>
  );
};
