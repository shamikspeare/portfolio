import React from "react";
import pp from "../assets/LINKEDIN PP 3.png";
import linkedin from "../assets/linkedin2.svg";
import youtube from "../assets/youtube2.svg";
import github from "../assets/github.svg";
import MailButton from "./MailButton";
import ResumeButton from "./ResumeButton";




const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white via-sky-50 to-neutral-200 rounded-b-[50px] sm:rounded-b-[80px] overflow-hidden">

        <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
          {/* Left Column - Image */}
          <div className="flex-1 flex items-end justify-center md:justify-start order-2 md:order-1 relative z-0">
            <div className="relative">
              {/* Dark spot behind image at base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-500 via-neutral-400/50 to-transparent -z-10 scale-150 blur-xl" />
              <img
                src={pp}
                alt="Profile"
                className="w-[700px] h-[700px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] object-cover relative z-10"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 order-1 md:order-2 z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="font-roboto font-bold text-4xl sm:text-7xl leading-tight text-neutral-800">
                <h1>HI, I'M SHAMIK</h1>
              </div>
              <div className="font-roboto text-lg sm:text-2xl mt-2 text-neutral-600 ">
                <h2>a fullstack web-developer | sophomore</h2>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3 sm:gap-3 md:gap-5 items-center justify-center flex-wrap">
              <ResumeButton />
              <a
                href="https://www.linkedin.com/in/shamikspeare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-9 h-9  rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
                />
              </a>

              <a
                href="https://github.com/shamikspeare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-9 h-9  rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
                />
              </a>

              <a
                href="https://youtube.com/@shamik-x8l?si=iR_8WEWQ8DMFGxDx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube}
                  alt="youtube"
                  className="w-9 h-9  rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
                />
              </a>
              <MailButton />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
