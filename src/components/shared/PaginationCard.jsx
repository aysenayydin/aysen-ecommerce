import { Button } from "@/components/ui/button"; // Shadcn Button bileşeni

import React, { useState } from "react";
import ProductCard from "./ProductCard";

function PaginationCard() {
  const products = [
    {
      id: 1,
      img: "/smallcards/card1.png",
      topText: "fsGraphic Design",
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
        {currentItems.map((product) => (
          <ProductCard product={product} key={product.id} />
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
