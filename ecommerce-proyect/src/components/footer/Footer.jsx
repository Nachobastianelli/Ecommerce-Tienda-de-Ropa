import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/home" className="text-gray-400 hover:text-gray-800 ">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-800 ">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-800 ">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-800">
            Contact
          </a>
        </div>
        <div className="text-gray-400">
          &copy; 2024 <span className="font-bold"> Dani ❤️ </span> Corp. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
