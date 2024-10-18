import React from "react";
import SmallCard from "../components/SmallCard";
import Slider from "../components/Slider";
import InnerContainer from "../components/InnerContainer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Brands from "../components/Brands";

function PageContent() {
  const [selectedCategory, setSelectedCategory] = useState("Men");

  return (
    <>
      <Slider />
      <InnerContainer>
        <div className="flex flex-col items-center md:flex-row gap-12">
          <SmallCard
            img={"smallcards/card1.png"}
            topText={"Your Space"}
            middleText={"Unique Life"}
            bottomText={"Explore Items"}
          />
          <SmallCard
            img={"smallcards/card2.jpg"}
            topText={"Ends Today"}
            middleText={"Elements Style"}
            bottomText={"Explore Items"}
          />
          <SmallCard
            img={"smallcards/card3.jpg"}
            topText={"Ends Today"}
            middleText={"Elements Style"}
            bottomText={"Explore Items"}
          />
        </div>
        <div className="relative">
          <img
            src="blockcard/card4.jpg"
            className="w-full h-auto"
            alt="Card Image"
          />
          <div className="absolute top-4 left-4">
            <p className="font-bold text-black">Furniture</p>
            <p className="text-black">5 Items</p>
          </div>
        </div>
      </InnerContainer>
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-4">BESTSELLER PRODUCTS</h2>
        <div className="flex justify-center gap-4 mb-4">
          {["Men", "Women", "Accessories"].map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-bold ${
                selectedCategory === category
                  ? "text-primary-color"
                  : "text-gray-500"
              }`}
              variant="ghost"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            className="w-10 h-10 border rounded-full text-gray-500"
            variant="outline"
          >
            &lt;
          </Button>
          <Button
            className="w-10 h-10 border rounded-full text-gray-500"
            variant="outline"
          >
            &gt;
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:justify-start lg:justify-between mb-8 ">
        <SmallCard
          img={"smallcards/card1.png"}
          topText={"Graphic Design"}
          middleText={"English Department"}
          bottomText={
            <>
              <span className="text-gray-500">$16.48</span>{" "}
              <span className="text-green-600 font-bold">$6.48</span>
            </>
          }
        />
        <SmallCard
          img={"smallcards/card2.jpg"}
          topText={"Graphic Design"}
          middleText={"English Department"}
          bottomText={
            <>
              <span className="text-gray-500">$16.48</span>{" "}
              <span className="text-green-600 font-bold">$6.48</span>
            </>
          }
        />
        <SmallCard
          img={"smallcards/card3.jpg"}
          topText={"Graphic Design"}
          middleText={"English Department"}
          bottomText={
            <>
              <span className="text-gray-500">$16.48</span>{" "}
              <span className="text-green-600 font-bold">$6.48</span>
            </>
          }
        />
      </div>
  <Brands/>
 
    </>
  );
}

export default PageContent;
