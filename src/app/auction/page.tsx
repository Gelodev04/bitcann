import AuctionTable from "@/components/auctionpage/AuctionTable";
import { SearchBar } from "@/components/SearchBar";
import React from "react";

export default function AuctionPage() {
  return (
    <main className="flex flex-col  items-center h-screen w-full justify-center px-5  ">    
     <SearchBar/>
     <AuctionTable/>
    </main>
  );
}
