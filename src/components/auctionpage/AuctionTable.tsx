import React from "react";

import { Table } from "./Table";
import { ButtonAuction } from "../ui/buttons/ButtonAuction";

export default function AuctionTable() {
  

  return (
    <div className="max-w-[900px]  w-full mt-[4.5rem]">
      <div className="flex justify-between items-center  px-3 mb-1">
          <h1 className="text-white text-[30px]">Auctions</h1>
          <div className="flex gap-[1rem]">
            <ButtonAuction text="Sort" />
            <ButtonAuction text="Filter" />
          </div>
      </div>

      <Table/>  
    </div>
  );
}
