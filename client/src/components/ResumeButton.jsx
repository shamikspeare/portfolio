import React from 'react'
import { Download } from 'lucide-react';


const ResumeButton = () => {
  return (
    <a
      className="flex gap-2 px-3 py-1.5 sm:px-4 sm:py-2 items-center justify-center rounded-full bg-sky-100 text-black border border-blue-600/50 hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out cursor-pointer">
      <span className='text-sm font-bold'>Resume</span>
      <Download size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
    </a>
  )
}

export default ResumeButton
