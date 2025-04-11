"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "./ui/buttons/ConnectWallet";
import { AccountDropdown } from "./ui/buttons/AccountDropdown";
import { Cross as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isConnected = pathname === "/auction" || pathname === "/profile";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="absolute w-full z-10">
      <header
        className={`w-full bg-[#1b1b1b] h-[150px] flex items-center justify-center  border-b-[#2d2d2d] ${
          isMenuOpen ? "border-b" : "border-0"
        }`}
      >
        <nav className="flex items-center justify-between max-w-[1270px] mx-auto px-5 md:pr-[3rem] w-full">
          <h1 className="font-[700] text-[40px] logo-gradient cursor-pointer">
            <Link href="/">Bitcann</Link>
          </h1>
          <ul className="md:flex items-center text-white font-[400] text-[18px] gap-[5rem] duration-100 ease-out hidden">
            <li>
              <Link
                href="/auction"
                className={
                  pathname === "/auction"
                    ? "text-[#888888]"
                    : "hover:text-[#888888] duration-100 ease-out"
                }
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={
                  pathname === "/profile"
                    ? "text-[#888888]"
                    : "hover:text-[#888888] duration-100 ease-out"
                }
              >
                Profile
              </Link>
            </li>

            {isConnected ? (
              <AccountDropdown />
            ) : (
              <ConnectWallet text="Connect Wallet" />
            )}
          </ul>

          {/* MOBILE MENU */}

          <div className="md:hidden">
            <Hamburger
              size={30}
              color="white"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className="px-5 text-white bg-[#1b1b1b]  w-full flex flex-col  items-center pb-5"
          style={{ height: "calc(100vh - 150px)" }}
        >
          <ul className="text-center w-full">
            <Link className="" href="/auction">
              <li className="border-b  border-b-[#2d2d2d] cursor-pointer py-[1rem] hover:bg-[#666666] duration-100 ease-out font-semibold tracking-widest">
                Auction
              </li>
            </Link>
            <Link href="/profile">
              <li className=" py-[1rem] hover:bg-[#666666] cursor-pointer duration-100 ease-out font-semibold tracking-widest">
                Profile
              </li>
            </Link>
            <li className="py-[1rem]">
              {isConnected ? (
                <AccountDropdown />
              ) : (
                <ConnectWallet text="Connect Wallet" />
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
