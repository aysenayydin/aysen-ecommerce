import { Button } from "@/components/ui/button"; // Shadcn Button bileşeni

import React, { useState } from "react";
import ProductCard from "./ProductCard";

function PaginationCard() {

  const products = [
    {
      img: "smallcards/card1.png",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card2.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card3.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card4.png",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card5.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card6.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card7.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      img: "smallcards/card8.jpg",
      topText: "Graphic Design",
      middleText: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
    },
  ];

  // Sayfa başına ürün sayısı ve sayfa durumu
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  // Mevcut sayfada gösterilecek ürünleri filtreleme
  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Sayfa değiştir fonksiyonu
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>

      <div className="flex flex-wrap justify-center gap-6 md:justify-start lg:justify-between mb-8">
        {currentItems.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            topText={product.topText}
            middleText={product.middleText}
            bottomText={
              <>
                <span className="text-gray-500">{product.price}</span>{" "}
                <span className="text-green-600 font-bold">
                  {product.discountedPrice}
                </span>
              </>
            }
          />
        ))}
      </div>

      {/* Sayfalama Kontrolleri */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          First
        </Button>

        {Array.from({ length: pageCount }, (_, i) => (
          <Button
            key={i}
            variant={i === currentPage ? "default" : "outline"}
            onClick={() => handlePageChange(i)}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          variant="outline"
          disabled={currentPage === pageCount - 1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PaginationCard;
