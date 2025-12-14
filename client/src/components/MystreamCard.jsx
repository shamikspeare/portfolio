import React from 'react';
import MyStream_project_image from "../assets/MyStream_project_image2.png";
import LinkButton from './LinkButton';
import AvatarCard from './AvatarCard';
import github from "../assets/github.svg";
import { useNavigate } from "react-router-dom";

const MystreamCard = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-7 flex justify-center">
      <div className="w-full max-w-[600px] bg-neutral-500/20 backdrop-blur-sm border border-white/60 p-4 sm:p-9 overflow-hidden rounded-3xl">
        {/* Title */}
        <h3 className="font-roboto text-[18px] sm:text-[22px] md:text-[25px] flex justify-center items-center font-bold">
          MERN VIDEO-CALLING APPLICATION
        </h3>

        {/* Project Image */}
        <img
          src={MyStream_project_image}
          className="rounded-xl mt-2 mb-4 w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover"
          alt="MyStream project"
        />

        {/* Description */}
        <p className="font-roboto text-[12px] sm:text-[15px] md:text-[17px] leading-snug text-neutral-600 ">
          A MERN app with Stream-powered real time video calling and messaging, with custom authentication
        </p>

        <div className='flex flex-col'>
          {/* AvatarCard */}
          <div className="mt-2 justify-start">
            <AvatarCard />
          </div>

          {/* Buttons row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="h-12 px-4 bg-white text-black rounded-full hover:bg-gray-300 transition"
              onClick={() => navigate("/mystream")}
            >
              View Details
            </button>
            <LinkButton href="https://mystream.onrender.com/" />
            <button className="w-12 h-12 p-1 bg-white text-black rounded-full hover:bg-gray-300 transition">
              <img src={github} alt="github" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MystreamCard;
