import React from "react";

import { Table } from "./Table";
import { ButtonAuction } from "../ui/buttons/ButtonAuction";

export default function AuctionTable() {
  

  return (
    <div className="max-w-[900px]  w-full sm:mt-[4.5rem] mt-[2rem]">
      <div className="flex justify-between items-center  px-3 mb-1 flex-col sm:flex-row">
          <h1 className="text-white text-[30px]">Auctions</h1>
          <div className="flex gap-[0.5rem] py-1">
            <ButtonAuction text="Sort" />
            <ButtonAuction text="Filter" />
          </div>
      </div>

      <Table/>  
    </div>
  );
}
