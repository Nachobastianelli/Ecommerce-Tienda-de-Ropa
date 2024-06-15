import React from "react";

const Header = ({ username }) => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            WAIKIKI
          </h1>
          <span className="ml-2 text-gray-600 dark:text-gray-300">
            | Indumentaria
          </span>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-900 dark:text-white hover:underline">
            Inicio
          </a>
          <a href="#" className="text-gray-900 dark:text-white hover:underline">
            Productos
          </a>
          <a href="#" className="text-gray-900 dark:text-white hover:underline">
            Ofertas
          </a>
          <a href="#" className="text-gray-900 dark:text-white hover:underline">
            Contacto
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="user-container flex items-center">
            <span className="text-gray-900 dark:text-white">
              Usuario: {username}
            </span>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="ml-2 w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
