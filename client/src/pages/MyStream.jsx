import React from 'react'
import MyStream_login_vid from '../assets/MyStream_login_vid.mp4'
import Footer from '@/components/Footer'
const MyStream = () => {
    
  return (
    <>
    <div className='container'>
    <div className='flex flex-col'>
        <div className='my-14 font-goldman font-bold text-[42px]'>MyStream</div>
        <div className="prose prose-invert max-w-none">
        <p>
            MyStream is a <strong>MERN stack</strong> web application that brings people closer through
            <strong> real-time video calling</strong>, <strong>instant messaging</strong>, and social features.
            Built with the power of <strong>Stream</strong>, it delivers a smooth, scalable communication
            experience — all wrapped in a modern UI.
        </p>

        <h2 className='bg-sky-400 p-2 rounded-md mt-5 inline-block text-lg'>Features:- </h2>
        <ul>
            <li>📹 <strong>Real-Time Video Calling</strong> – High-quality peer-to-peer video sessions powered by Stream.</li>
            <li>💬 <strong>Instant Messaging</strong> – Seamless, secure text chat alongside video calls.</li>
            <li>🔐 <strong>Custom Authentication</strong> – My own authentication system (no third-party auth services).</li>
            <li>👥 <strong>Friend Requests</strong> – Send, accept, or deny friend requests.</li>
            <li>🔔 <strong>Notifications</strong> – Get notified when requests are sent or responded to.</li>
            <li>🖼️ <strong>Auto Avatars</strong> – Unique profile avatars generated dynamically via API.</li>
            <li>☁️ <strong>Free Hosting</strong> – Deployed on Render’s free tier.</li>
        </ul>

        <h2 className='bg-sky-400 p-2 rounded-md mt-5 inline-block text-lg'>TECH STACK:- </h2>
        <ul>
        <li><strong>Frontend</strong>: React, TailwindCSS</li>
        <li><strong>Backend</strong>: Node.js, Express.js</li>
        <li><strong>Database</strong>: MongoDB</li>
        <li><strong>Real-time Communication</strong>: Stream SDK</li>
        <li><strong>Hosting</strong>: Render (free tier)</li>
        </ul>

        <h2 className='bg-sky-400 p-2 rounded-md mt-5 mb-1 inline-block text-lg'>LOGIN:- </h2>
        <video src={MyStream_login_vid} autoPlay loop muted playsInline className='rounded-lg shadow-lg'></video>


        <p className='mt-5'>🌐 Live Demo 👉 <span><a href="https://mystream.onrender.com/"  target="_blank"
        rel="noopener noreferrer" className='text-blue-600'>https://mystream.onrender.com/</a></span></p>
        

        </div>
        <Footer/>

    </div>
    </div>
    </>
  )
}

export default MyStream