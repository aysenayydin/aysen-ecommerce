import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ img, categoryName, itemCount }) {
  const navigate = useNavigate();

  // Kategoriye tıklanınca çağrılacak fonksiyon
  const handleCategoryClick = () => {
    navigate(`/shop/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="relative w-full mb-6 cursor-pointer" onClick={handleCategoryClick}>
      <img src={img} alt={categoryName} className="w-full h-60 object-cover rounded-lg" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
        <h2 className="text-2xl">{categoryName}</h2>
        <p>{itemCount} Items</p>
      </div>
    </div>
  );
}

export default CategoryCard;
