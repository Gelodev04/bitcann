import React from 'react'
import Link from 'next/link'
import { ConnectWallet } from './ui/buttons/ConnectWallet'
export default function Navbar() {
    

  return (
    <header className='py-[50px] px-[83px] absolute w-full'>
        <nav className='flex items-center justify-between'> 
            <h1 className='font-[700] text-[40px] logo-gradient cursor-pointer'><Link href="/">Bitcann</Link></h1>
            <ul className='flex items-center text-white font-[400] text-[18px] gap-[5rem]'>
                <li>
                    <Link href="/auction">Auctions</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <ConnectWallet/>
            </ul>
        </nav>
    </header>
  )
}
