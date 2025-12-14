import express from "../assets/express.png"
import javascript from "../assets/js.svg"
import node from "../assets/node.png"
import react from "../assets/react.svg"
import mb from "../assets/mongodb-icon.svg"
import tailwind from "../assets/tailwind.svg"
import React from 'react'

const AvatarCard = () => {
    const AVATARS = [
        { src: express, fallback: "express", tooltip: "express" },
        { src: javascript, fallback: "javascript", tooltip: "javascript" },
        { src: react, fallback: "react", tooltip: "react" },
        { src: mb, fallback: "mongodb", tooltip: "mongodb" },
        { src: node, fallback: "node", tooltip: "node" },
        { src: tailwind, fallback: "tailwind", tooltip: "tailwind" },
    ]

    return (
        <div className="flex gap-2">
            {AVATARS.map((avatar, index) => (
                <img
                    src={avatar.src}
                    alt={avatar.fallback}
                    className="w-8 h-8 sm:w-8 sm:h-8 bg-white rounded-full object-cover border-2 border-white gap-2 hover:scale-110 hover:z-10 transition-transform duration-200"
                />
            ))}
        </div>
    )
}

export default AvatarCard