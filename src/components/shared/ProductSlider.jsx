import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ProductSlider({ bannerPosition = "left", banner }) {
  const [selectedCategory, setSelectedCategory] = useState("men");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className={`flex ${
        bannerPosition === "left"
          ? "flex-col md:flex-row"
          : " flex-col md:flex-row-reverse"
      }`}
    >
      <div className="relative flex shrink-0">
        <img src={banner} className="w-full h-auto " alt="Card Image" />
        <div className="absolute top-4 left-4">
          <p className="font-bold text-black">Furniture</p>
          <p className="text-black">5 Items</p>
        </div>
      </div>
      <div className="p-4 text-center md:w-[800px]">
        <div className="flex  flex-col md:flex-row border-b border-grey justify-between pb-2">
          <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
            {["Men", "Women", "Accessories"].map((category) => (
              <Link to={`/${category.toLowerCase()}`} key={category}>
                <Button
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`font-bold ${
                    selectedCategory === category.toLowerCase()
                      ? "text-primary-color"
                      : "text-gray-500"
                  }`}
                  variant="ghost"
                >
                  {category}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-4 ">
            <Button
              className="w-[50px] h-[50px] border rounded-full text-gray-500"
              variant="outline"
              ref={prevRef}
            >
              &lt;
            </Button>
            <Button
              className="w-[50px] h-[50px] border rounded-full text-gray-500"
              variant="outline"
              ref={nextRef}
            >
              &gt;
            </Button>
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          speed={1000}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 md:justify-start lg:justify-between mb-8 ">
              <ProductCard
                img={"smallcards/card1.png"}
                topText={"Graphic Design"}
                middleText={"English Department"}
                bottomText={
                  <>
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-green-600 font-bold">$6.48</span>
                  </>
                }
              />
              <ProductCard
                img={"smallcards/card2.jpg"}
                topText={"Graphic Design"}
                middleText={"English Department"}
                bottomText={
                  <>
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-green-600 font-bold">$6.48</span>
                  </>
                }
              />
              <ProductCard
                img={"smallcards/card3.jpg"}
                topText={"Graphic Design"}
                middleText={"English Department"}
                bottomText={
                  <>
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-green-600 font-bold">$6.48</span>
                  </>
                }
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 md:justify-start lg:justify-between mb-8 ">
              <ProductCard
                img={"smallcards/card1.png"}
                topText={"Graphic Design"}
                middleText={"English Department"}
                bottomText={
                  <>
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-green-600 font-bold">$6.48</span>
                  </>
                }
              />
              <ProductCard
                img={"smallcards/card2.jpg"}
                topText={"Graphic Design"}
                middleText={"English Department"}
                bottomText={
                  <>
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-green-600 font-bold">$6.48</span>
                  </>
                }
              />
              <ProductCard
                img={"smallcards/card3.jpg"}
                topText={"Graphic Design"}
                middleText={"English Department"}
                bottomText={
                  <>
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-green-600 font-bold">$6.48</span>
                  </>
                }
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
