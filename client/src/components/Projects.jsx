import React from "react";
import MystreamCard from "./MystreamCard";
import CoBoardCard from "./CoBoardCard";

const Projects = () => {
  return (
    <>
      <div className="mt-14 font-roboto text-5xl sm:text-6xl lg:text-[100px] flex justify-center items-center font-bold ">
        PROJECTS
      </div>
      <div className="px-4">
        <MystreamCard />
        <CoBoardCard />
      </div>
    </>
  );
};

export default Projects;
