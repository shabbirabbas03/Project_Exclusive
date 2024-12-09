import React from "react";
import Sale from "../Sections/Sale";
import OurTeam from "../Sections/OurTeam";
import Service from "../Sections/Service";

const About = () => {
  return (
    <section className="bg-white flex flex-wrap gap-y-14 justify-between items-center">
      <article className="w-[525px] h-[336px] space-y-7 mx-auto">
        <h1 className="text-[54px] tracking-wider font-semibold text-black">
          Our Story
        </h1>
        <p className="text-black">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="text-black">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </article>
      <figure>
        <img src="About/aboutpage.svg" alt="aboutpage" />
      </figure>
      <Sale />
      <OurTeam />
      <Service />
    </section>
  );
};

export default About;
