import React, { useContext, useMemo, useState } from "react";
import { CartContext } from "../../services/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const InfoPayments = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [cartStorage, setCartStorege] = useState([]);

  const clickHandler = () => {
    clearCart();
    localStorage.removeItem("cart");
    showToast("Compra realizada con exito!", true);
    navigate("/home");
  };

  const calculateTotal = useMemo(() => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cart]);

  return (
    <>
      <div className="max-w-4xl mx-8 mt-8 p-8 bg-white rounded-xl shadow-lg">
        <ul className="divide-y divide-gray-200">
          {cart &&
            cart.map((product) => (
              <li key={product.id} className="flex items-center py-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-500">Cantidad: </span>
                    <span className="ml-2 text-gray-900 font-medium">
                      {product.quantity}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-500">Precio: </span>
                    <span className="ml-2 text-gray-900 font-medium">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="mt-6 text-right flex flex-col justify-end items-end">
          <div className="my-5">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Total: ${calculateTotal}
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/home")}
              className="py-2 px-4 bg-blue-500 rounded-lg flex justify-center items-center text-xl text-white cursor-pointer my-2"
            >
              Home
            </button>
            <button
              onClick={clickHandler}
              className="py-2 px-4 bg-indigo-500 rounded-lg flex justify-center items-center text-xl text-white cursor-pointer my-2"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPayments;
