import React from "react";
import MystreamCard from "./MystreamCard";
import { Highlighter } from "@/components/magicui/highlighter";

const Projects = () => {
  return (
    <>
      <div className="mt-14 font-goldman text-5xl sm:text-6xl lg:text-[100px] ">
        <Highlighter
          action="highlight"
          color="hsl(198.4 93.2% 59.6%)"
          isView={true}
        >
          Projects
        </Highlighter>
      </div>
      <MystreamCard />
    </>
  );
};

export default Projects;
