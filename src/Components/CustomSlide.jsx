import React from "react";

const CustomSlide = ({ heading, paragraph, ImgSrc, price, offer }) => {
  return (
    <div className="slide-content w-full h-full flex justify-evenly items-center bg-black sm:p-12">
      <div className="max-w-lg text-center lg:text-left lg:max-w-xs">
        <div className="flex justify-center lg:justify-start items-center gap-6 md:mb-6">
          <img src="/Icon/aicon.svg" alt="aicon" className="w-10 h-10" />
          <h5 className="text-white md:text-xl">{heading}</h5>
        </div>
        <p className="text-xl lg:text-5xl font-semibold tracking-wider sm:py-3 text-white">
          {paragraph}
        </p>
        <div className="flex justify-center lg:justify-start gap-3">
          <p className="text-lg">{offer}</p>
          <p className="text-lg">{price}</p>
        </div>
        <button className="relative flex md:ml-0 ml-10 items-center justify-center gap-2 px-4 border-none bg-transparent cursor-pointer text-slate-50 font-semibold md:text-lg transition-colors duration-300 ease-out hover:text-sky-500">
          <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-0.5 after:bg-sky-500 after:transition-all after:duration-300 after:ease-out hover:after:w-full">
            Shop Now
          </a>
        </button>
      </div>

      <div className="max-w-5xl mt-8 lg:mt-0">
        <img
          src={`Product/${ImgSrc}.svg`}
          alt="product"
          className="h-64 sm:w-full w-52 object-contain sm:h-80 lg:h-96"
        />
      </div>
    </div>
  );
};

export default CustomSlide;
