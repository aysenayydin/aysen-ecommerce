import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button"


import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        speed={1000}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative " src="home1.jpg" alt="" />
          <div className="absolute flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-bold text-white">GROCERIES DELIVERY</h1>
            <h2 className="text-white text-lg">We know how large objects will act, but things on a 
            small scale just do not act that way.</h2>
            <Button variant="secondary" className=
            "bg-primary-color text-white max-w-min">Start Now</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="coffee2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
