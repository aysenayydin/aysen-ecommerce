import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-white mt-24 p-10 rounded-lg shadow-md md:shadow-none text-center max-w-lg mx-auto ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Get answers to all your questions.</h2>
      <p className="text-base text-gray-600 leading-relaxed mb-6">
        Problems trying to resolve the conflict between the two major realms of classical physics.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 mb-4">
        CONTACT OUR COMPANY
      </button>
      <div className="flex justify-center gap-6 text-2xl text-gray-600">
        <FaTwitter className="hover:text-blue-500" />
        <FaFacebook className="hover:text-blue-500" />
        <FaInstagram className="hover:text-blue-500" />
        <FaLinkedin className="hover:text-blue-500" />
      </div>
    </div>
  );
};

export default ContactSection;