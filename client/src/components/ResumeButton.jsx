import React from 'react'
import { User } from 'lucide-react';
import { Tooltip,TooltipTrigger, TooltipContent } from './animate-ui/components/radix/tooltip.jsx';

const ResumeButton = () => {
  return (
    <Tooltip>
        <TooltipTrigger>
            <a
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-black text-white hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out">
            <User size={36} />
            </a>
        </TooltipTrigger>
        <TooltipContent>Resume</TooltipContent>
    </Tooltip>
  )
}

export default ResumeButton
