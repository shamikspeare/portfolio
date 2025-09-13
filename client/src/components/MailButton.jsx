import React from 'react'
import { Mail } from 'lucide-react';
import { Tooltip,TooltipTrigger, TooltipContent } from './animate-ui/components/radix/tooltip.jsx';

const MailButton = () => {
  return (
    <Tooltip>
        <TooltipTrigger>
            <a
            href='mailto:gshamik14@gmail.com'
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-black text-white hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out">
            <Mail size={36} />
            </a>
        </TooltipTrigger>
        <TooltipContent>Mail</TooltipContent>
    </Tooltip>
  )
}

export default MailButton
