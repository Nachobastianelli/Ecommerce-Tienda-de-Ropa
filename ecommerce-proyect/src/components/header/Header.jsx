import React, { useContext, useState } from "react";
import { CartIcon, PalmTreeIcon } from "../../icons/Icons";
import { CartContext } from "../../services/cartContext/CartContext";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Link } from "react-router-dom";

const Header = ({ username, onCartOpen }) => {
  const { cart } = useContext(CartContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const itemsLength = cart.reduce((count, item) => count + item.quantity, 0);
  const { user, handleLogout } = useContext(AuthenticationContext);

  // menu desplegable
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownImg, setShowDropdownImg] = useState(false);

  const styleButton =
    "relative inline cursor-pointer text-l before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100";

  return (
    <header className="bg-white dark:bg-slate-800 shadow-md py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <PalmTreeIcon />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            <a href="/init">WAIKIKI</a>
          </h1>
          <span className="ml-2 text-gray-600 dark:text-gray-300">
            <a href="/home">| Dress</a>
          </span>
        </div>
        <nav className="flex space-x-4">
          <a href="/home" className={styleButton}>
            Home
          </a>

          <div className="relative inline-block">
            <a
              href="#"
              className={styleButton}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >

              Products
            </a>
            {showDropdown && (
              <div
                className="absolute left-0 w-48 bg-gray-100 dark:bg-slate-800 shadow-lg rounded-lg z-10"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  to="/tshirts"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                >
                  T-shirts
                </Link>
                <Link
                  to="/jersey"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 border-t-2"
                >
                  Jersey
                </Link>
                <Link
                  to="/sneakers"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 border-t-2"
                >
                  Sneakers
                </Link>
                <Link
                  to="/accessories"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 border-t-2"
                >
                  Accessories
                </Link>
              </div>
            )}
          </div>
          {user && user.role === "Editor" && (
            <a href="/NewProduct" className={`${styleButton}  `}>
              Add Product
            </a>
          )}
          {user && user.role === "Admin" && (
            <button className="px-3 rounded-md bg-green-600 m-auto">
              <a
                href="/users"
                className="relative inline cursor-pointer text-white text-l  before:bg-green-700 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
              >
                Users
              </a>
            </button>
          )}
        </nav>

        <div className="flex items-center space-x-4 gap-6">
          <button
            className="text-gray-900 dark:text-white hover:underline"
            onClick={onCartOpen}
          >
            <CartIcon itemsLength={itemsLength} />
          </button>
          {user && (
            <div className="user-container flex items-center relative">
              <span className="text-gray-900 dark:text-white">
                {user.username}
              </span>
              <img
                src={user.imageUrl}
                alt="User Avatar"
                className="ml-2 w-10 h-10 rounded-full border border-gray-300"
                onMouseEnter={() => setShowDropdownImg(true)}
                onMouseLeave={() => setShowDropdownImg(false)}
              />
              {showDropdownImg && (
                <div
                  className="absolute left-0 mt-40 w-48 bg-gray-100 dark:bg-slate-800 shadow-lg rounded-lg z-10"
                  onMouseEnter={() => setShowDropdownImg(true)}
                  onMouseLeave={() => setShowDropdownImg(false)}
                >
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 "
                  >
                    Sing Off
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 border-t-2">
                    Edit User
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 border-t-2">
                    Delete User
                  </button>
                </div>
              )}
            </div>
          )}
          <div>
            {!user && (
              <a
                href="/login"
                className="flex items-center justify-center py-2 px-4 bg-indigo-600 rounded-lg text-white font-semibold cursor-pointer"
              >
                Login
                <PalmTreeIcon />
              </a>
            )}
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
              onClick={() => setShowCartModal(false)}
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
