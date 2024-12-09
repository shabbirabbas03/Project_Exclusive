import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroItems } from "../constant";
import CustomSlide from "../Components/CustomSlide";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      className="swiper-container h-4/5 max-w-6xl"
    >
      {HeroItems.map((item) => (
        <SwiperSlide
          key={item.id}
          className="swiper-slide h-full flex justify-center items-center"
        >
          <CustomSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
