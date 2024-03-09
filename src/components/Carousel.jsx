// import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Images
import carousel1 from "../assets/images/carousel_1.jpg";
import carousel2 from "../assets/images/carousel_2.jpg";
import carousel3 from "../assets/images/carousel_3.jpg";
import carousel4 from "../assets/images/carousel_4.jpg";
import carousel5 from "../assets/images/carousel_5.jpg";
import carousel6 from "../assets/images/carousel_6.jpg";
import carousel7 from "../assets/images/carousel_7.jpg";

const Carousel = () => {
  return (
    <div className="bg-white h-[600px]">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: "5000" }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel7} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
