import React from "react";
import { AddToCartIcon } from "../../icons/Icons";
import { useCart } from "../../hooks/useCart";

const ProductsItem = ({
  id,
  imageUrl,
  name,
  price,
  totalPrice,
  discount,
  product,
}) => {
  const { addToCart } = useCart();

  return (
    <div className=" mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src="https://imgv3.fotor.com/images/cover-photo-image/ai-generate-dragon-from-text-in-Fotor-AI-image-generator.jpg"
        className="h-56 w-full object-cover object-center"
        alt="Imagen del Producto"
      />
      <div className="flex flex-row justify-between items-center ">
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            Jorge
          </h2>
          <div className="flex items-center mb-4">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              200$
            </p>
            <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
              200$
            </p>
          </div>
        </div>
        <div>
          <button
            className="bg-gray-200 size-11 flex items-center justify-center rounded-lg m-4"
            onClick={() => addToCart(product)}
          >
            <AddToCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
