import React, { useContext, useState } from "react";
import { CartIcon } from "../../icons/Icons";
import { CartContext } from "../../services/cartContext/CartContext";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Link } from "react-router-dom";

const Header = ({ username, onCartOpen }) => {
  const { cart } = useContext(CartContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const itemsLength = cart.reduce((count, item) => count + item.quantity, 0);
  const { user } = useContext(AuthenticationContext);

  //menu desplegable
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800 shadow-md py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
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
            className="relative inline cursor-pointer text-l before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Inicio
          </a>

          
          <div className="relative inline-block">
            <a
              href="#"
              className="relative inline cursor-pointer text-l before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Productos
            </a>
            {showDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-lg z-10"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  to="/remeras"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                >
                  Remeras
                </Link>
                <Link
                  to="/buzos"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                >
                  Buzos
                </Link>
                <Link
                  to="/zapatillas"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                >
                  Zapatillas
                </Link>
                <Link
                  to="/accesorios"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                >
                  Accesorios
                </Link>
              </div>
            )}
          </div>

          <a
            href="#"
            className="relative inline cursor-pointer text-l before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Ofertas
          </a>
          <a
            href="#"
            className="relative inline cursor-pointer text-l before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4 gap-6">
          <button
            className="text-gray-900 dark:text-white hover:underline"
            onClick={onCartOpen}
          >
            <CartIcon itemsLength={itemsLength} />
          </button>

          <div className="user-container flex items-center">
            <span className="text-gray-900 dark:text-white">{username}</span>
            <img
              src={user.imageUrl}
              alt="User Avatar"
              className="ml-2 w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>
      </div>

      {showCartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <div>{item.name}</div>
                    <div>Quantity: {item.quantity}</div>
                  </li>
                ))}
              </ul>
            )}
            <button
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-lg"
              onClick={!onCartOpen}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
