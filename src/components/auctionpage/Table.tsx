import React from "react";

export const Table = () => {
  const tableTitle = [
    "Domain",
    "Current Bid",
    "Time Remaining",
    "Highest Bidder",
  ];

  const data = [
    {
      domain: "romit.bch",
      currentBid: "0.1 BCH",
      timeRemaining: "1 Day",
      highestBidder: "cashaddr/rrrr.sat",
    },
    {
      domain: "romit.sat",
      currentBid: "Registered",
      timeRemaining: "",
      highestBidder: "cashaddr/rrrr.sat",
    },
    
  ];

  return (
    <div className="rounded-[20px]  overflow-hidden overflow-x-auto">
      {/* Header */}
      <div className="grid grid-cols-4 bg-[#555555] py-[1.2rem] px-[1.5rem] text-center items-center min-w-[650px] overflow-auto">
        {tableTitle.map((title, index) => (
          <h1
            key={index}
            className="text-white text-[17px] font-[600]"
          >
            {title}
          </h1>
        ))}
      </div>

      {/* Rows */}
      <div className="bg-[#272727] min-w-[650px] overflow-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 py-[1.8rem] px-[1.5rem] text-white text-center items-center  border-b border-[#1F1F1F] last:border-b-0"
          >
            <span className="text-[15px]">{item.domain}</span>
            <span className="text-[15px]">{item.currentBid}</span>
            <span className="text-[15px]">{item.timeRemaining}</span>
            <span className="text-[15px] text-[#27A1FA]">{item.highestBidder}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
