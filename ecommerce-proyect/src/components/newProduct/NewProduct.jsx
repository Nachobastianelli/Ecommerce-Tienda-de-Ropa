import React, { useState, useCallback } from "react";
import useToast from "../../hooks/useToast";

const NewProduct = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const { showToast } = useToast();

  const changeNameHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const changePriceHandler = useCallback((e) => {
    setPrice(e.target.value);
  }, []);

  const changeImageHandler = useCallback((e) => {
    setImageUrl(e.target.value);
  }, []);

  const changeDescriptionHandler = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const addProduct = useCallback(
    (e) => {
      e.preventDefault();

      if (
        name.trim() === "" ||
        description.trim() === "" ||
        imageUrl.trim() === "" ||
        price === 0 ||
        price === ""
      ) {
        showToast("Complete todos los campos antes de crear un producto!", false);
        return;
      }

      const newProduct = {
        name,
        description,
        imageUrl,
        price,
      };

      onAddProduct(newProduct);
      showToast("El producto se creó correctamente!", true);
      setName("");
      setDescription("");
      setImageUrl("");
      setPrice(0.0);
    },
    [name, description, imageUrl, price, onAddProduct, showToast]
  );

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <form onSubmit={addProduct} className="p-4">
        <img
          src={imageUrl || "https://via.placeholder.com/150"}
          className="h-56 w-full object-cover object-center mb-4"
          alt="Imagen del Producto"
        />
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={changeNameHandler}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Nombre del Producto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Precio $
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={changePriceHandler}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Precio del Producto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Imagen URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={changeImageHandler}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="URL de la Imagen del Producto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={changeDescriptionHandler}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Descripción del Producto"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
