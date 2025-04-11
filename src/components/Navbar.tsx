"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "./ui/buttons/ConnectWallet";
import { AccountDropdown } from "./ui/buttons/AccountDropdown";
import { Cross as Hamburger } from 'hamburger-react'


export default function Navbar() {
  const pathname = usePathname();

  const isConnected = pathname === "/auction" || pathname === "/profile";

  return (
    <header className="py-[35px]  absolute w-full">
      <nav className="flex items-center justify-between max-w-[1270px] mx-auto px-5 md:pr-[3rem]">
        <h1 className="font-[700] text-[40px] logo-gradient cursor-pointer">
          <Link href="/">Bitcann</Link>
        </h1>
        <ul className="md:flex items-center text-white font-[400] text-[18px] gap-[5rem] duration-100 ease-out hidden">
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
          
          {isConnected ? <AccountDropdown /> : <ConnectWallet text="Connect Wallet" />}
        </ul>

        {/* MOBILE MENU */}

        <div className="md:hidden">
          <Hamburger size={30} color="white"/>
        </div>
      </nav>
    </header>
  );
}
