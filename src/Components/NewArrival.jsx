import React from "react";

const NewArrival = ({ imgSrc, title, description }) => {
  return (
    <div>
      <figure>
        <img src={imgSrc} alt={title} className="w-full h-auto" />
      </figure>
      <article className="relative">
        <div className="absolute bottom-10 left-5 text-white">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-base max-w-xs font-light">{description}</p>
          <button className="relative flex items-center mt-4 justify-center gap-2 px-4 border-none bg-transparent cursor-pointer text-slate-50 font-semibold md:text-lg transition-colors duration-300 ease-out hover:text-sky-500">
            <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-0.5 after:bg-sky-500 after:transition-all after:duration-300 after:ease-out hover:after:w-full">
              Shop Now
            </a>
          </button>
        </div>
      </article>
    </div>
  );
};

export default NewArrival;
