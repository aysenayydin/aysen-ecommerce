import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductDetailPage() {
  const location = useLocation();
  const product = location.state?.product;
  const [selectedColor, setSelectedColor] = useState(null);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return <div className="container mx-auto p-4">Ürün bulunamadı.</div>;
  }

  const colors = product.colors || ["#23A6F0", "#23856D", "#E77C40", "#252B42"];
  const thumbnailImages = product.thumbnailImages || [product.img, product.img];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg flex flex-col md:flex-row gap-8 p-6">
        <div className="md:w-1/2 space-y-4">
          <Swiper spaceBetween={10} slidesPerView={1} className="rounded-lg">
            {thumbnailImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {product.middleText}
          </h1>
          <div className="flex items-center">
            <div className="flex items-center">
              {Array(product.rating || 5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.reviews || 10} Reviews
            </span>
          </div>
          <p className="text-2xl font-bold">
            ${product.discountedPrice || product.price}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Availability :</span>
            <span className="text-blue-500 font-semibold">
              {product.availability || "In Stock"}
            </span>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <p className="text-gray-600">{product.topText}</p>
          <div className="border-t border-gray-200 my-4"></div>
          <div>
            <p className="font-semibold mb-2">Colors:</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-blue-500"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              className="bg-primary-color text-white flex-grow md:flex-grow-0"
            >
              Select Options
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setLiked((prev) => !prev)}
              className="w-10 h-10 border rounded-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={liked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  liked ? "text-red-500" : "text-gray-500"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 border rounded-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 border rounded-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
