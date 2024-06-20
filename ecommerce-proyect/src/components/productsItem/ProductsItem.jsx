import React from "react";

const ProductsItem = ({ imageUrl, name, price, totalPrice, discount }) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imageUrl}
        className="h-56 w-full object-cover object-center"
        alt="Imagen del Producto"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {name}
        </h2>
        <div className="flex items-center mb-4">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            {price}$
          </p>
          <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
            {totalPrice}$
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {discount}% de descuento
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
