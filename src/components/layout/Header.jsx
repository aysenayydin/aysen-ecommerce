import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Header() {
  const menuItems = ["Home", "Product", "Shop", "Pricing", "Contact"];

  return (
    <header className="flex flex-col justify-between p-4">
      <div className="w-full flex justify-between items-center">
        <div className="font-bold text-lg text-secondary-color">
          🌙 BANDAGE ☕
        </div>
        {/* Büyük ekranlar için navigasyon */}
        <nav className="hidden md:flex gap-8 md:flex-row flex-col items-start">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-lg font-medium text-secondary-color"
              activeClassName="text-primary-color"
              exact
            >
              {item}
            </NavLink>
          ))}
        </nav>
        {/* Kullanıcı butonları */}
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="text-secondary-color">
            <i className="fas fa-user"></i>
          </Button>
          <Button variant="ghost" className="text-secondary-color">
            <i className="fas fa-search"></i>
          </Button>
          <Button variant="ghost" className="text-secondary-color">
            <i className="fas fa-shopping-cart"></i>
          </Button>
          <Button variant="ghost" className="text-secondary-color">
            <i className="fas fa-bars"></i>
          </Button>
        </nav>
      </div>
      {/* Küçük ekranlar için navigasyon */}
      <nav className="mt-4 md:hidden flex items-center gap-1 md:flex-row flex-col space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-lg font-medium text-secondary-color"
            activeClassName="text-primary-color"
            exact
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
