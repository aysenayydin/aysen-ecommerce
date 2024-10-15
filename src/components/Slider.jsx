import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          <img className="relative " src="coffee1.jpg" alt="" />
          <div className="absolute">
            <h1 className="text-4xl font-bold text-white">COFFEE DELIVERY</h1>
            <h2 className="text-white text-lg">Freshly brewed, delivered straight to your door.</h2>
            <button>Button</button>
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
