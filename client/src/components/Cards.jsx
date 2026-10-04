import React from 'react';
import { useNavigate } from "react-router-dom";
import LinkButton from './LinkButton';
import github from "../assets/github.svg";

const Cards = ({
    image,
    siteLink,
    githubLink,
    viewDetailsLink,
    title,
    titleColor = "",
    description,
    children
}) => {
    const navigate = useNavigate();

    return (
        <div className="mt-7 flex justify-center">
            <div className="w-[85%] sm:w-full max-w-[600px] md:max-w-[850px] bg-neutral-800 backdrop-blur-sm px-4 sm:px-9 pb-4 sm:pb-9 pt-3 sm:pt-6 overflow-hidden rounded-3xl">
                {/* Title */}
                {title && (
                    <h3 className={`font-roboto text-[22px] sm:text-[28px] md:text-[28px] flex justify-center items-center font-bold mb-4 ${titleColor}`}>
                        {title}
                    </h3>
                )}

                {/* Project Image */}
                <img
                    src={image}
                    className="rounded-xl mt-4 mb-4 w-full max-h-[200px] sm:max-h-[300px] md:max-h-[400px] object-cover"
                    alt="Project"
                />

                {/* Description */}
                <p className="font-roboto text-[12px] sm:text-[15px] md:text-[17px] leading-relaxed text-neutral-400">
                    {description}
                </p>

                <div className='flex flex-col'>
                    {/* Custom Content (like AvatarCard) */}
                    <div className="mt-2 justify-start">
                        {children}
                    </div>

                    {/* Buttons row */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <button
                            className="h-12 px-4 bg-white text-black rounded-full hover:bg-gray-300 transition"
                            onClick={() => navigate(viewDetailsLink)}
                        >
                            View Details
                        </button>

                        <LinkButton href={siteLink} />

                        <a
                            href={githubLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 p-1 bg-white text-black rounded-full hover:bg-gray-300 transition flex items-center justify-center"
                        >
                            <img src={github} alt="github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
