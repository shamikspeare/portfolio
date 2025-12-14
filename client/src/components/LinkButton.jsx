import React from "react"
import { ArrowUpRight } from "lucide-react"

const LinkButton = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        w-12 h-12
        bg-white text-black rounded-full 
        hover:bg-gray-300 data-[state=open]:bg-gray-400 data-[state=open]:text-white
        
      "
    >
      <ArrowUpRight className="w-6 h-6" />
    </a>
  )
}

export default LinkButton
