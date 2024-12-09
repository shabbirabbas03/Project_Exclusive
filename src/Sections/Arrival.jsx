import React from "react";
import NewArrival from "../Components/NewArrival";

const Arrival = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-4">
        <div className="bg-primary px-3 py-6 rounded-md"></div>
        <h6 className="text-primary font-semibold">Featured</h6>
      </div>
      <div className="py-3">
        <h1 className="text-4xl text-black tracking-wide font-semibold">
          New Arrival
        </h1>
      </div>

      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        <div className="lg:row-span-2 lg:col-span-2">
          <NewArrival
            imgSrc="Arrival/arrival-1.svg"
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
          />
        </div>
        <div className="col-span-2 md:col-span-2 justify-center">
          <NewArrival
            imgSrc="Arrival/arrival-2.svg"
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-2">
          <NewArrival
            imgSrc="Arrival/arrival-3.svg"
            title="Speakers"
            description="Amazon wireless speakers"
          />
          <NewArrival
            imgSrc="Arrival/arrival-4.svg"
            title="Perfume"
            description="GUCCI INTENSE OUD EDP"
          />
        </div>
      </article>
    </div>
  );
};

export default Arrival;
