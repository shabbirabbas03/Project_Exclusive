import React from "react";

const Sallers = ({ ImgSrc, heading, paragraph }) => {
  return (
    <div className="border-2 hover:bg-error h-[230px] w-[270px] rounded py-5">
      <img src={`Sale/${ImgSrc}.svg`} alt="sale" className="" />
      <div>
        <h4 className="font-bold md:text-[32px] py-3 text-black">{heading}</h4>
        <p className="md:text-base text-black">{paragraph}</p>
      </div>
    </div>
  );
};

export default Sallers;
