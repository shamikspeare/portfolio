import React from 'react';
import MyStream_project_image from "../assets/MyStream_project_image2.png";
import AvatarCard from './AvatarCard';
import Cards from './Cards';

const MystreamCard = () => {
  return (
    <Cards
      title="MERN VIDEO-CALLING APPLICATION"
      titleColor="text-green-300"
      image={MyStream_project_image}
      description="A MERN app with Stream-powered real time video calling and messaging, with custom authentication"
      siteLink="https://mystream.onrender.com/"
      githubLink=""
      viewDetailsLink="/mystream"
    >
      <AvatarCard />
    </Cards>
  );
};

export default MystreamCard;
