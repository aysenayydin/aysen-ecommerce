import React from "react";


function ProductCard({ img, topText, middleText, bottomText }) {
 return (
    <div className="bg-white w-[333px] h-[232px] relative flex  items-center justify-between p-4">
      <div className="flex flex-col gap-2 text-secondary-color">
        <p>{topText}</p>
        <p className="font-bold text-lg ">{middleText}</p>
        <p className="text-sm">{bottomText}</p>
      </div>
      <img src={img} alt="" className="w-48 h-48 object-contain" />
    </div>
  );
}

export default ProductCard;


