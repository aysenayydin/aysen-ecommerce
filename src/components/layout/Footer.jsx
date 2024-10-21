import React from "react";

function Footer() {
  return (
    <footer className="bg-white mt-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 items-start text-left md:flex-row  md:gap-20  ">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="font-bold text-3xl  text-primary-color">
              Get In Touch
            </h2>
            <p className="text-sm ">the quick fox jumps over the lazy dog</p>
            <div className="flex md:justify-start gap-5 text-2xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-primary-color"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-primary-color"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-primary-color"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className="font-bold text-3xl mb-4 text-primary-color">
              Company Info
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  Carrier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  We are hiring
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className="font-bold text-3xl mb-4 text-primary-color">
              Features
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className=" text-secondary-color hover:text-primary-color"
                >
                  Business Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  User Analytic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  Live Chat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className="font-bold text-3xl mb-4 text-primary-color">
              Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  IOS & Android
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  Watch a Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-color hover:text-primary-color"
                >
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm bg-gray-200 py-4 text-gray-700">
        Made With Love By Figmaland All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
