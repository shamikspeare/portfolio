import React from 'react'
import express from "../assets/express.png"
import javascript from "../assets/js.svg"
import node from "../assets/node.png"
import react from "../assets/react.svg"
import mb from "../assets/mongodb-icon.svg"
import tailwind from "../assets/tailwind.svg"
import python from "../assets/python.svg"
import c from "../assets/c++.svg"
import pg from "../assets/postgresql.svg"
import nextjs from "../assets/nextjs.svg"
import typescript from "../assets/typescript.svg"
import tensorflow from "../assets/tensorflow.svg"
import numpy from "../assets/numpy.svg"
import pandas from "../assets/pandas.svg"
import matplotlib from "../assets/matplotlib.svg"
import git from "../assets/git.svg"
import { Highlighter } from "@/components/magicui/highlighter";


const Skills = () => {
  const Languages = [
    { src: javascript, fallback: "javascript", name: "javascript" },
    { src: typescript, fallback: "typescript", name: "typescript" },
    { src: python, fallback: "python", name: "python" },
    { src: c, fallback: "c++", name: "c++" },
  ]
  const Frameworks = [
    { src: express, fallback: "express", name: "express" },
    { src: node, fallback: "node", name: "node" },
    { src: react, fallback: "react", name: "react" },
    { src: nextjs, fallback: "nextjs", name: "next js" },
    { src: numpy, fallback: "numpy", name: "numpy" },
    { src: pandas, fallback: "pandas", name: "pandas" },
    { src: matplotlib, fallback: "matplotlib", name: "matplotlib" },
  ]
  const Databases = [
    { src: mb, fallback: "express", name: "MongoDb" },
    { src: pg, fallback: "node", name: "PostgreSql" },
  ]
  const Tools = [
    { src: git, fallback: "git", name: "git" },
    { src: tailwind, fallback: "tailwind", name: "tailwind" },
  ]

  return (
    <div className="mt-14">
      <div className="font-goldman text-5xl sm:text-6xl lg:text-[100px] ">
        <Highlighter action="highlight" color="hsl(198.4 93.2% 59.6%)" isView={true}>
          Skills
        </Highlighter>
      </div>
      <div className='flex justify-center'>
      <div className="border rounded-md p-5 mt-7 w-[1000px]">
        {/* LANGUAGES */}
            <p className="font-goldman text-[28px] ">Languages</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3">
            {Languages.map((language, index) => (
                <div key={index} className="flex flex-col items-center">
                <img
                    src={language.src}
                    alt={language.fallback}
                    className="w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110"
                />
                <p className="mt-1 text-xs sm:text-[10px]">{language.name}</p>
                </div>
            ))}
            </div>

        {/* FRAMEWORKS */}
        <div className="mt-5">
            <p className="font-goldman text-[28px]">Frameworks</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3">
            {Frameworks.map((framework, index) => (
                <div key={index} className="flex flex-col items-center">
                <img
                    src={framework.src}
                    alt={framework.fallback}
                    className={`w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 
                    ${framework.name === "express" || framework.name === "next js"
                        ? "bg-white p-1 rounded-full"
                        : ""}`}
                />
                <p className="mt-1 text-xs sm:text-[10px] ">{framework.name}</p>
                </div>
            ))}
            </div>
        </div>

        {/* DATABASES */}
        <div className=" mt-5">
            <p className="font-goldman text-[28px]">Databases</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3">
            {Databases.map((db, index) => (
                <div key={index} className="flex flex-col items-center">
                <img
                    src={db.src}
                    alt={db.fallback}
                    className="w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110"
                />
                <p className="mt-1 text-xs sm:text-[10px]">{db.name}</p>
                </div>
            ))}
            </div>
        </div>

        {/* TOOLS */}
        <div className="mt-5">
            <p className="font-goldman text-[28px]">Tools</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3 ml-1">
            {Tools.map((t, index) => (
                <div key={index} className="flex flex-col items-center">
                <img
                    src={t.src}
                    alt={t.fallback}
                    className="w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110"
                />
                <p className="mt-1 text-xs sm:text-[10px] ">{t.name}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
