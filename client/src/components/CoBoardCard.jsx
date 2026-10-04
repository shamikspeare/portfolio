import React from 'react';
import pic from "../assets/coboard.png";
import Cards from './Cards';

const CoBoardCard = () => {
    return (
        <Cards
            title="CoBoard - A Collaborative Whiteboard"
            titleColor="text-yellow-200"
            image={pic}
            description={
                <>
                    A real-time collaborative workspace built with the <b className="text-neutral-300">MERN</b> stack, <b className="text-neutral-300">Konva.js</b> as the canvas engine, and <b className="text-neutral-300">Socket.io</b> for real-time communication. Engineered with a robust security layer including <b className="text-neutral-300">JWT authentication</b>, secure HTTP-only cookies, and <b className="text-neutral-300">automated OTP email verification</b>.
                </>
            }
            siteLink=""
            githubLink=""
            viewDetailsLink=""
        />
    );
};

export default CoBoardCard;