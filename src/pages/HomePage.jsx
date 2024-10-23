import React, { useState } from "react";
import ProductCard from "../components/shared/ProductCard";
import Slider from "../components/shared/Slider";
import InnerContainer from "../components/shared/InnerContainer";
import { Button } from "@/components/ui/button";
import Brands from "../components/shared/Brands";
import { Link } from "react-router-dom";
import ProductSlider from "@/components/shared/ProductSlider";
import ShopPopular from "@/components/shared/ShopPopular";

function HomePage() {
  const products = [
    {
      id: 1,
      img: "/smallcards/card1.png",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 2,
      img: "/smallcards/card2.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 3,
      img: "/smallcards/card3.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 4,
      img: "/smallcards/card4.png",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 5,
      img: "/smallcards/card5.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 6,
      img: "/smallcards/card6.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 7,
      img: "/smallcards/card7.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 8,
      img: "/smallcards/card8.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
  ];
  return (
    <div className="flex flex-col gap-24">
      <Slider />
      <InnerContainer>
        <div className="flex md:flex-row items-center flex-col gap-12">
          {products.slice(0, 3).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </InnerContainer>

      <InnerContainer>
        <ProductSlider banner="blockcard/card4.jpg" />
      </InnerContainer>

      <InnerContainer>
        <ShopPopular />
      </InnerContainer>

      <InnerContainer>
        <ProductSlider bannerPosition="right" banner="blockcard/card5.png" />
      </InnerContainer>
      <Brands />
    </div>
  );
}

export default HomePage;
