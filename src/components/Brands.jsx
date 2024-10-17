import React from "react";

function Brands() {
  return (
    <div className="flex flex-col items-center gap-14 md:flex-row md:gap-20 md:justify-center py-28">
      <img
        src="brandcards/fa-brands_hooli.png"
        alt="Hooli"
        className="w-24 h-auto"
      />
      <img
        src="brandcards/fa-brands_lyft.png"
        alt="Lyft"
        className="w-24 h-auto"
      />
      <img
        src="brandcards/fa-brands_aws.png"
        alt="AWS"
        className="w-24 h-auto"
      />
      <img
        src="brandcards/fa-brands_reddit-alien.png"
        alt="Reddit"
        className="w-24 h-auto"
      />
      <img src="brandcards/muck.png" alt="muck" className="w-24 h-auto" />
      <img
        src="brandcards/stripe.png"
        alt="stripe"
        className="w-24 h-auto"
      />
    </div>
  );
}

export default Brands;
