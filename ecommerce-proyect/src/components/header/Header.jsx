import React from "react";
import { CartIcon } from "../../icons/Icons";

const Header = ({ username }) => {
  let itemsLength = 5; //A ver si podemos usar el context para esto
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md py-4 w-full">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            WAIKIKI
          </h1>
          <span className="ml-2 text-gray-600 dark:text-gray-300">
            | Indumentaria
          </span>
        </div>
        <nav className="flex space-x-4">
          <a
            href="#"
            className="relative inline cursor-pointer text-l  before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Inicio
          </a>
          <a
            href="#"
            className="relative inline cursor-pointer text-l  before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Productos
          </a>
          <a
            href="#"
            className="relative inline cursor-pointer text-l  before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Ofertas
          </a>
          <a
            href="#"
            className="relative inline cursor-pointer text-l  before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4 gap-6 px-16">
          <a
            href="/compras"
            className="text-gray-900 dark:text-white hover:underline"
          >
            <CartIcon itemsLength={itemsLength} />
          </a>
          <div className="user-container flex items-center">
            <span className="text-gray-900 dark:text-white">{username}</span>
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
