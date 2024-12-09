import React from "react";

const OurSlide = ({ ImgSrc, heading, paragraph }) => {
  return (
    <div>
      <div className="items-center">
        <center className="bg-gray-100 w-[370px] h-[430px] py-8 object-cover">
          <img src={`Ourteam/${ImgSrc}.svg`} alt="team" />
        </center>
        <h2 className="text-[32px] font-medium text-black">{heading}</h2>
        <p className="text-base text-black">{paragraph}</p>
      </div>
      <div className="flex gap-4 items-center py-4">
        <img src="Ourteam/team-4.svg" alt="team-4" />
        <img src="Ourteam/team-5.svg" alt="team-5" />
        <img src="Ourteam/team-6.svg" alt="team-6" />
      </div>
    </div>
  );
};

export default OurSlide;
