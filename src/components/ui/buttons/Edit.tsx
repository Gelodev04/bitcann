import React from 'react'

export const Edit = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="bg-[#313131] text-white px-[1.7rem] py-[4px] rounded-[8px] text-sm absolute top-[-2.2rem] cursor-pointer hover:bg-[#666666] duration-100 ease-out">
    Edit
  </button>
  )
}
