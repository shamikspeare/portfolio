import React from "react";
import { TypingText } from "@/animate-components/typing";
import { SpringElement } from "@/animate-components/spring-element";
import pp from "../assets/LINKEDIN PP 2.jpg";
import stroke from "../assets/stroke.png";
import linkedin from "../assets/linkedin2.svg";
import youtube from "../assets/youtube2.svg";
import github from "../assets/github.svg";
import MailButton from "./MailButton";
import ResumeButton from "./ResumeButton";
import { Tooltip,TooltipTrigger, TooltipContent } from './animate-ui/components/radix/tooltip.jsx';
import { Highlighter } from "@/components/magicui/highlighter";



const About = () => {
  return (
     <>
    <div className="px-3 sm:px-6 lg:px-12">
      {/* Profile + Heading */}
      <div className="mt-14 flex flex-col items-center justify-center gap-5 z-1">
        <SpringElement>
          <img
            src={pp}
            alt="Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover"
            draggable={false}
          />
        </SpringElement>

        {/* Text Block */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="font-goldman font-bold text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-tight">
            HI, I'M{" "}
            <Highlighter action="highlight" color="hsl(198.4 93.2% 59.6%)">SHAMIK</Highlighter>
          </div>
          <TypingText
            className="font-spacemono text-[13px] sm:text-[15px] md:text-[16px] mt-2"
            text="a fullstack web-developer | sophomore"
          />
        </div>
      </div>
    </div>
    {/* INFO Block */}
      <div className="mt-8 md:mt-8 sm:mt-14 flex justify-center">
        <div
          className="flex flex-col gap-2 sm:gap-3 md:gap-4 
                    border p-3 sm:p-4 md:p-5 rounded-lg hover:shadow-xl bg-white 
                    text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] 
                    leading-snug md:leading-normal"
        >
          <p>👦🏽 : SHAMIK GOSWAMI</p>
          <p>
            🗓️ : 14<sup>th</sup> JULY, 2004 | 21
          </p>
          <p>📌 : KOLKATA, INDIA</p>
          <p>🎯 : ROBOTICS SOFTWARE ENGINEER</p>
          <p>🧩 : GUITAR, FOOTBALL</p>
          <p>🏫 : INSTITUTE OF ENGINEERING AND MANAGEMENT, KOLKATA</p>
        </div>
      </div>
     
        {/* Social Links */}
      <div className="px-3 sm:px-6 lg:px-12">
        <div className="flex gap-4 sm:gap-6 md:gap-12 mt-8 sm:mt-14 md:mt-8 items-center justify-center flex-wrap">
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.linkedin.com/in/shamikspeare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>Linkedin</TooltipContent>

          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <a
              href="https://github.com/shamikspeare"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
                src={github}
                alt="github"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
              />
              </a>
            </TooltipTrigger>
            <TooltipContent>Github</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger>
              <a
              href="https://youtube.com/@shamik-x8l?si=iR_8WEWQ8DMFGxDx"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
                src={youtube}
                alt="youtube"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
              />
              </a>
            </TooltipTrigger>
            <TooltipContent>Youtube</TooltipContent>
          </Tooltip>
          
          <MailButton/>
          <ResumeButton/>
        </div>
      </div>
   </>
  );
};

export default About;
