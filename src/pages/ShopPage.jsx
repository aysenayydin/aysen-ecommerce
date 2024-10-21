import ShopPopular from "@/components/shared/ShopPopular";
import InnerContainer from "../components/shared/InnerContainer";
import ProductCard from "../components/shared/ProductCard";
import React from "react";

function ShopPage() {
  return (
    <div>
      <InnerContainer>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start lg:justify-between mb-8 ">
          <ProductCard
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
          <ProductCard
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
          <ProductCard
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
          <ProductCard
            img={"smallcards/card4.png"}
            topText={"Graphic Design"}
            middleText={"English Department"}
            bottomText={
              <>
                <span className="text-gray-500">$16.48</span>{" "}
                <span className="text-green-600 font-bold">$6.48</span>
              </>
            }
          />
          <ProductCard
            img={"smallcards/card5.jpg"}
            topText={"Graphic Design"}
            middleText={"English Department"}
            bottomText={
              <>
                <span className="text-gray-500">$16.48</span>{" "}
                <span className="text-green-600 font-bold">$6.48</span>
              </>
            }
          />
          <ProductCard
            img={"smallcards/card6.jpg"}
            topText={"Graphic Design"}
            middleText={"English Department"}
            bottomText={
              <>
                <span className="text-gray-500">$16.48</span>{" "}
                <span className="text-green-600 font-bold">$6.48</span>
              </>
            }
          />
          <ProductCard
            img={"smallcards/card7.jpg"}
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
        <ShopPopular />
      </InnerContainer>
    </div>
  );
}

export default ShopPage;
