import React from "react";

const Browse = ({ ImgSrc, title }) => {
  return (
    <center className="border-2 group rounded-md p-9 max-w-32 transition-all ease-in-out delay-100 hover:bg-primary relative">
      <img
        src={`Categories/${ImgSrc}.svg`}
        alt="Categories"
        className="object-contain max-w-14 mb-5 rounded-2xl group-hover:bg-white border-gray-300"
      />
      <h6 className="text-lg text-black group-hover:text-white mt-16 absolute inset-0 flex items-center justify-center">
        {title}
      </h6>
    </center>
  );
};

export default Browse;
