"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "./ui/buttons/ConnectWallet";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-[35px] px-[83px] absolute w-full">
      <nav className="flex items-center justify-between">
        <h1 className="font-[700] text-[40px] logo-gradient cursor-pointer">
          <Link href="/">Bitcann</Link>
        </h1>
        <ul className="flex items-center text-white font-[400] text-[18px] gap-[5rem] duration-100 ease-out">
          <li>
            <Link
              href="/auction"
              className={pathname === "/auction" ? "text-[#888888]" : "hover:text-[#888888] duration-100 ease-out"}
            >
              Auctions
            </Link>
          </li>
          <li>
          <Link 
              href="/profile"
              className={pathname === '/profile' ? 'text-[#888888]' : 'hover:text-[#888888] duration-100 ease-out'}
            >
              Profile
            </Link>
          </li>
          <ConnectWallet />
        </ul>
      </nav>
    </header>
  );
}
