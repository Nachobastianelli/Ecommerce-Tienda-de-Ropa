import React, { useState, useEffect } from "react";

const Products = () => {
  const [imageUrl, setImageUrl] = useState(() => {
    return localStorage.getItem("productImage");
  });

  useEffect(() => {
    localStorage.setItem("productImage", imageUrl);
  }, [imageUrl]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={imageUrl}
        alt="Imagen del Producto"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          Remera
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          Descripción de la remera
        </p>
        <div className="flex items-center mb-4">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            $20.00
          </p>
          <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% de descuento
          </p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default Products;
