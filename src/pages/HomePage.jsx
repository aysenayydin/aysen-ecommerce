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
  return (
    <div className="flex flex-col gap-24">
      <Slider />
      <InnerContainer>
        <div className="flex flex-col items-center md:flex-row gap-12">
          <ProductCard
            img={"smallcards/card1.png"}
            topText={"Yeni Ürün"}
            middleText={"Caramel Ice Cream"}
            bottomText={"Explore items"}
          />
          <ProductCard
            img={"smallcards/card2.jpg"}
            topText={"Ends Today"}
            middleText={"Organic Green Apple"}
            bottomText={"Explore items"}
          />
          <ProductCard
            img={"smallcards/card3.jpg"}
            topText={"Special Prize"}
            middleText={"Jambon"}
            bottomText={"Explore items"}
          />
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
