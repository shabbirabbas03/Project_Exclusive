import { OurTeamSquad } from "../constant";
import OurSlide from "../Components/OurSlide";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React from "react";

const OurTeam = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper max-w-7xl"
    >
      {OurTeamSquad.map((item) => (
        <SwiperSlide
          key={item.id}
          className="swiper-slide flex justify-between items-center py-10"
        >
          <OurSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OurTeam;
