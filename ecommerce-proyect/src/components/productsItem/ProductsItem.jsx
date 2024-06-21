import React, { useContext } from "react";
import { AddToCartIcon } from "../../icons/Icons";
import { CartContext } from "../../services/cartContext/CartContext";

const ProductsItem = ({ id, imageUrl, name, price }) => {
  const { addToCart } = useContext(CartContext);

  const product = {
    id,
    imageUrl,
    name,
    price,
    quantity: 1,
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imageUrl}
        className="h-56 w-full object-cover object-center"
        alt="Imagen del Producto"
      />
      <div className="flex flex-row justify-between items-center">
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {name}
          </h2>
          <div className="flex items-center mb-4">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              {price}$
            </p>
          </div>
        </div>
        <div>
          <button
            className="bg-gray-200 size-11 flex items-center justify-center rounded-lg m-4"
            onClick={handleAddToCart}
          >
            <AddToCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
