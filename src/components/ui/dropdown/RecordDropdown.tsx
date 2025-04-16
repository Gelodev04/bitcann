import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function RecordDropdown() {

  const dropdownOptions = [
      { label: "BTC Address", value: "BTC Address" },
      { label: "ETH Address", value: "ETH Address" },
      { label: "X", value: "Owner" },
      { label: "Facebook", value: "Facebook" },
      { label: "Instagram", value: "Instagram" },
      { label: "Website", value: "Website" },
      { label: "Blog", value: "Blog" },
      { label: "Reddit", value: "Reddit" },
      { label: "Youtube", value: "Youtube" },
      { label: "Snapchat", value: "Snapchat" },
    ];

  return (
    <Select >
      <SelectTrigger className="w-full outline-0 border-0 bg-[#333333] ">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="bg-[#313131] outline-0 border border-[#444]">
        <SelectGroup className="">
          <SelectLabel></SelectLabel>
          {dropdownOptions.map((option, index) => (
            <SelectItem className="data-[highlighted]:bg-[#666666] data-[highlighted]:text-white text-white" key={index} value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
