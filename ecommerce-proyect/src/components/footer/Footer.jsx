import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
        <div className="text-gray-400">
          &copy; 2024 Dani Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
