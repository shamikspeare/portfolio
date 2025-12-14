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
import pt from "../assets/pytorch.svg"
import keras from "../assets/keras.svg"
import cv from "../assets/opencv.svg"
import java from "../assets/java.svg"


const Skills = () => {
  const WebDevelopment = [
    { src: javascript, fallback: "javascript", name: "JavaScript", needsBg: false },
    { src: typescript, fallback: "typescript", name: "TypeScript", needsBg: false },
    { src: express, fallback: "express", name: "Express", needsBg: true },
    { src: node, fallback: "node", name: "Node.js", needsBg: false },
    { src: react, fallback: "react", name: "React", needsBg: false },
    { src: nextjs, fallback: "nextjs", name: "Next.js", needsBg: true },
    { src: mb, fallback: "mongodb", name: "MongoDB", needsBg: false },
    { src: pg, fallback: "postgresql", name: "PostgreSQL", needsBg: false },
    { src: git, fallback: "git", name: "Git", needsBg: false },
    { src: tailwind, fallback: "tailwind", name: "Tailwind", needsBg: false },
  ]

  const MachineLearning = [
    { src: python, fallback: "python", name: "Python", needsBg: false },
    { src: tensorflow, fallback: "tensorflow", name: "TensorFlow", needsBg: true },
    { src: numpy, fallback: "numpy", name: "NumPy", needsBg: false },
    { src: pandas, fallback: "pandas", name: "Pandas", needsBg: false },
    { src: matplotlib, fallback: "matplotlib", name: "Matplotlib", needsBg: false },
    { src: pt, fallback: "pytorch", name: "PyTorch", needsBg: true },
    { src: keras, fallback: "keras", name: "Keras", needsBg: false },
    { src: cv, fallback: "opencv", name: "OpenCV", needsBg: false },

  ]

  const languages = [
    { src: c, fallback: "c", name: "C", needsBg: false },
    { src: python, fallback: "python", name: "Python", needsBg: false },
    { src: javascript, fallback: "javascript", name: "JavaScript", needsBg: false },
    { src: typescript, fallback: "typescript", name: "TypeScript", needsBg: false },
    { src: java, fallback: "java", name: "Java", needsBg: false },
  ]

  return (
    <div className="mt-14">
      <div className="mt-14 font-roboto text-5xl sm:text-6xl lg:text-[100px] flex justify-center items-center font-bold ">
        PROFILE
      </div>
      <div className='flex justify-center px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full mt-7'>
          {/* ABOUT ME */}
          <div className="rounded-3xl p-5 ">
            <h2 className="font-roboto text-[18px] sm:text-[22px] md:text-[25px] font-bold text-neutral-700">ABOUT ME</h2>
            <p className="text-neutral-500">
              I am a <strong>Sophomore</strong> studying <strong>Electrical & Electronics Engineering (EEE)</strong> at <strong>IEM Salt Lake, Kolkata</strong>.
              Currently architecting web solutions as a <strong>MERN Full Stack Developer</strong>, I am leveraging my hardware background to transition into <strong>Robotics Software Engineering</strong>. Based in <strong>India</strong>, I build software that interacts with the real world.
              My hobbies include <strong>Playing Guitar</strong> and <strong>Traveling</strong>.
            </p>
          </div>
          {/* WEB DEVELOPMENT */}
          <div className="border border-sky-600/20 rounded-3xl p-5 bg-sky-50">
            <p className="font-roboto text-[18px] sm:text-[22px] md:text-[25px] font-bold text-sky-600">WEB DEVELOPMENT</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3">
              {WebDevelopment.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={skill.src}
                    alt={skill.fallback}
                    className={`w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 
                    ${skill.needsBg ? "bg-sky-50 p-1 rounded-full" : ""}`}
                  />
                  <p className="mt-1 text-xs sm:text-[10px]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* MACHINE LEARNING */}
          <div className="border border-red-600/20 rounded-3xl p-5 bg-red-50">
            <p className="font-roboto text-[18px] sm:text-[22px] md:text-[25px] font-bold text-red-600">MACHINE LEARNING</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3">
              {MachineLearning.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={skill.src}
                    alt={skill.fallback}
                    className={`w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 
                    ${skill.needsBg ? "bg-sky-50 p-1 rounded-full" : ""}`}
                  />
                  <p className="mt-1 text-xs sm:text-[10px]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* LANGUAGES */}
          <div className="border border-green-600/20 rounded-3xl p-5 bg-green-50">
            <p className="font-roboto text-[18px] sm:text-[22px] md:text-[25px] font-bold text-green-600">LANGUAGES</p>
            <div className="flex flex-wrap gap-6 sm:gap-4 mt-3">
              {languages.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={skill.src}
                    alt={skill.fallback}
                    className={`w-8 h-8 sm:w-14 sm:h-14 transition-transform duration-300 hover:scale-110 
                    ${skill.needsBg ? "bg-sky-50 p-1 rounded-full" : ""}`}
                  />
                  <p className="mt-1 text-xs sm:text-[10px]">{skill.name}</p>
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
