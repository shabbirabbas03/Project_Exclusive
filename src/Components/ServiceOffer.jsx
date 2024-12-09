import React from "react";

const ServiceOffer = ({ ImgSrc, heading, paragraph }) => {
  return (
    <div>
      <img src={`Offer/${ImgSrc}.svg`} alt="offer" />
      <div className="py-6">
        <h4 className="font-semibold text-xl py-2 text-black">{heading}</h4>
        <p className="text-sm text-black">{paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceOffer;
