import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "../components/Slider";
import { NavLink } from 'react-router-dom';
function Header() {
  const menuItems = ["Home", "Product", "Pricing", "Contact"];

  return (
    <div>
      <header className="flex flex-col justify-between p-4 ">
        <div className="w-full flex justify-between items-center">
          <div className="font-bold text-lg text-primary-color">
          🌙 LUNA COFFEE ☕
          </div>
          <nav className="hidden md:flex gap-8 md:flex-row flex-col items-start ">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-secondary-color text-lg font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <nav className="flex items-center space-x-4">
            <button className="text-secondary-color">
              <i className="fas fa-user"></i>
            </button>
            <button className="text-secondary-color">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-secondary-color">
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button className="text-secondary-color">
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
        <nav className="mt-4 md:hidden flex items-center gap-1 md:flex-row flex-col space-y-4">
          {menuItems.map((item) => (
            <NavLink to={`/${item}`}  className="text-secondary-color text-lg font-medium" key={item}>
              {item}
           </NavLink>
          ))}
        </nav>
      </header>
      <Slider />
    </div>
  );
}

export default Header;
