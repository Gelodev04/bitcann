import React from 'react'

export const PlaceBid = ({text}: {text: string}) => {
  return (
    <button className='bg-[#27A1FA] text-white py-[4px] px-[35px] text-[15px]  rounded-[10px] cursor-pointer tracking-wide duration-100 ease-out hover:bg-[#24c5ff] '>{text}</button>
  )
}
