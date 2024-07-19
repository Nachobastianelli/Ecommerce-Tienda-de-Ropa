import React, { useContext, useState } from "react";
import { AddToCartIcon } from "../../icons/Icons";
import { CartContext } from "../../services/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const ProductsItem = ({ product, onShowModal, onEdit }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const { user } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const modalShowHandler = () => {
    onShowModal(product.id);
  };

  const clickHandler = () => {
    navigate(`/home/${product.id}`, {
      state: {
        product,
        quantity,
      },
    });
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg h-auto">
      <img
        src={product.imageUrl}
        className="h-56 w-full object-cover object-center cursor-pointer"
        alt="Imagen del Producto"
        onClick={clickHandler}
      />
      <div className="flex flex-row justify-between items-center p-4 h-36">
        <div>
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {product.name}
          </h2>
          <div className="flex items-center mb-4">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              {product.price}$
            </p>
          </div>
        </div>
        <button
          className="bg-gray-200 flex items-center justify-center rounded-lg p-2 hover:bg-gray-300 active:transform active:translate-y-1 focus:ring transition-all"
          onClick={handleAddToCart}
        >
          <AddToCartIcon />
        </button>
      </div>
      {user && user.role === "Editor" && (
        <div className="flex justify-evenly items-center p-4">
          <button
            className="w-1/3 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="w-1/3 py-2 px-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl text-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={modalShowHandler}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsItem;
