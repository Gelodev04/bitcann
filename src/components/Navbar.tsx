import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    

  return (
    <header className='py-[50px] px-[83px] absolute w-full'>
        <nav className='flex items-center justify-between'> 
            <h1 className='font-[700] text-[40px] logo-gradient'>Bitcann</h1>
            <ul className='flex items-center text-white font-[400] text-[18px] gap-[6rem]'>
                <li>
                    <Link href="/">Auctions</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
                <button className='bg-[#27A1FA] rounded-full py-[0.8rem] px-[2.2rem] cursor-pointer  duration-100 ease-out hover:bg-[#24c5ff]'>Connect Wallet</button>
            </ul>
        </nav>
    </header>
  )
}
