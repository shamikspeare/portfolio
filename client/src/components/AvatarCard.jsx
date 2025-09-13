import { AvatarGroup, AvatarGroupTooltip } from "./animate-ui/components/animate/avatar-group";
import express from "../assets/express.png"
import javascript from "../assets/js.svg"
import node from "../assets/node.png"
import react from "../assets/react.svg"
import mb from "../assets/mongodb-icon.svg"
import tailwind from "../assets/tailwind.svg"



import React from 'react'

const AvatarCard = () => {
    const AVATARS = [
        { src: express, fallback:"express", tooltip:"express"},
        { src: javascript, fallback:"javascript", tooltip:"javascript"},
        { src: react, fallback:"react", tooltip:"react"},
        { src: mb, fallback:"mongodb", tooltip:"mongodb"},
        { src: node, fallback:"node", tooltip:"node"},
        { src: tailwind, fallback:"tailwind", tooltip:"tailwind"},
    ]

  return (
    <div>
        <AvatarGroup>
            {AVATARS.map((avatar, index) => (
                <div key={index}>
                <img src={avatar.src} alt={avatar.fallback} className="w-9 h-9 sm:w-12 sm:h-12 bg-white p-1 mx-2 rounded-full object-cover" />
                <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip>
                </div>
            ))}
        </AvatarGroup>
    </div>
  )
}

export default AvatarCard