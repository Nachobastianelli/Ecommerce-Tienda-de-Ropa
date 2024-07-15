import React, { useContext, useMemo } from "react";
import { CartContext } from "../../services/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "../../services/authentication/authentication.context";

const CartModal = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthenticationContext);

  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const userLocal = localStorage.getItem("user");

  const calculateTotal = useMemo(() => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cart]);

  const clickHandler = () => {
    if (userLocal === null) {
      navigate("/login");
    } else {
      navigate("/payments");
    }
  };

  return (
    <>
      <AuthenticationContextProvider>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-out">
              <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
                Carrito de Compras
              </h2>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center py-4 transition-transform transform hover:scale-105"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-lg"
                    />
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {product.name}
                      </h3>
                      <div className="mt-2 flex items-center">
                        <span className="text-gray-500 dark:text-gray-400">
                          Cantidad:{" "}
                        </span>
                        <span className="ml-2 text-gray-900 dark:text-white font-medium">
                          {product.quantity}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <span className="text-gray-500 dark:text-gray-400">
                          Precio:{" "}
                        </span>
                        <span className="ml-2 text-gray-900 dark:text-white font-medium">
                          ${(product.price * product.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="ml-6 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 ease-out"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  Total: ${calculateTotal}
                </h3>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={onClose}
                  className="bg-gray-700 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 ease-out"
                >
                  Cerrar
                </button>
                <button
                  disabled={cart.length === 0 || calculateTotal === "0.00"}
                  onClick={clickHandler}
                  className={`bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-out
                ${
                  cart.length === 0 || calculateTotal === "0.00"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }
              `}
                  style={{
                    opacity:
                      cart.length === 0 || calculateTotal === "0.00" ? 0.5 : 1,
                    pointerEvents:
                      cart.length === 0 || calculateTotal === "0.00"
                        ? "none"
                        : "auto",
                  }}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        )}
      </AuthenticationContextProvider>
    </>
  );
};

export default CartModal;
