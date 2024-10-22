import InnerContainer from "../components/shared/InnerContainer";
import CategoryCard from "../components/shared/CategoryCard"; // Yeni bileşen import edildi
import React from "react";
import PaginationCard from "@/components/shared/PaginationCard";
import { Link } from "react-router-dom";

function ShopPage() {
  
  const categories = [
    { img: "categories/fruits.jpg", categoryName: "Fruits", itemCount: 10 },
    { img: "categories/vegetables.jpg", categoryName: "Vegetables", itemCount: 8 },
  ];

  return (
    <div>
      <InnerContainer>
      
    <div>
          <h1 className="text-center text-2xl font-bold my-4">Shop</h1>

        <nav className=" flex justify-center items-center mb-8 text-lg text-gray-600">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-color font-bold">Shop</span>
        </nav>
    </div>


        <div className="mb-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              img={category.img}
              categoryName={category.categoryName}
              itemCount={category.itemCount}
            />
          ))}
        </div>
        <PaginationCard />
      </InnerContainer>
    </div>
  );
}

export default ShopPage;
