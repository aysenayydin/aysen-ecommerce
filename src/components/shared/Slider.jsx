import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="w-full h-[638px] ">
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
        className="w-full h-full"
      >
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img className="w-full h-full object-cover" src="home1.jpg" alt="" />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              GROCERIES DELIVERY
            </h1>
            <h2 className="text-white text-lg max-w-2xl px-4">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h2>
            <Link to="/home">
              <Button
                variant="secondary"
                className="bg-primary-color text-white"
              >
                Start Now
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img className="w-full h-full object-cover" src="home2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
