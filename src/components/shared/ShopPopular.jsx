import React from "react";

function ShopPopular() {
  return (
    <div className="flex flex-col md:flex-row items-start bg-backgroundGrey">
      <img
        src="blockcard/mostpop.jpg"
        alt="Popular Item"
        className="h-[528px] "
      />

      <div className="mt-4 pl-4 text-center">
        <h2 className="text-xl font-bold">Most Popular</h2>
        <p className="mt-2 text-gray-500">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <div className="flex flex-col items-center mt-4">
          <img src="smallcards/card8.jpg" alt="Product Image" />
          <div className="ml-4 text-center">
            <h3 className="text-lg font-medium">English Department</h3>
            <p className="text-sm text-gray-600">15 Sales</p>
            <p className="mt-1">
              <span className="line-through text-gray-500">$16.48</span>
              <span className="text-green-500 font-bold ml-2">$6.48</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPopular;
