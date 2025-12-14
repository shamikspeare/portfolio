import React from 'react'
import { Mail } from 'lucide-react';


const MailButton = () => {
  return (
    <a
      href='mailto:gshamik14@gmail.com'
      className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out">
      <Mail size={25} />
    </a>
  )
}

export default MailButton
