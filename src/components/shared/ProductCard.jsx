import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  if (!product) {
    return null; // Or render a placeholder/loading state
  }
  const handleCardClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <div
      className="bg-white w-[333px] h-[232px] relative flex  items-center justify-between p-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-2 text-secondary-color">
        <p>{product.topText}</p>
        <p className="font-bold text-lg ">{product.middleText}</p>
        <p className="text-sm">
          <>
            <span className="text-gray-500">{product.price}</span>
            <span className="text-green-600 font-bold">
              {product.discountedPrice}
            </span>
          </>
        </p>
      </div>
      <img src={product.img} alt="" className="w-48 h-48 object-contain" />
    </div>
  );
}

export default ProductCard;
