import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.clientReducer.user);
  const menuItems = ["Home", "Product", "Shop", "Team", "Contact"];

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
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-primary-color" : "text-secondary-color"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
        {/* Kullanıcı butonları */}
        <nav className="flex items-center space-x-4">
          {user && user.email ? (
            <div className="flex items-center space-x-2">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-secondary-color font-medium">
                {user.name || user.email}
              </span>
            </div>
          ) : (
            <NavLink
              to={`/signup`}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-primary-color" : "text-secondary-color"
                }`
              }
            >
              <Button variant="ghost" className="text-secondary-color">
                <FaUser />
              </Button>
            </NavLink>
          )}

          <Button variant="ghost" className="text-secondary-color">
            <FaSearch />
          </Button>
          <Button variant="ghost" className="text-secondary-color">
            <FaShoppingCart />
          </Button>
          <Button variant="ghost" className="text-secondary-color">
            <FaBars />
          </Button>
        </nav>
      </div>
      {/* Küçük ekranlar için navigasyon */}
      <nav className="mt-4 md:hidden flex items-center gap-1 md:flex-row flex-col space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-primary-color" : "text-secondary-color"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
