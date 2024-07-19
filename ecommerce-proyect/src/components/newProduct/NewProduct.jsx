import React, { useState, useCallback } from "react";
import useToast from "../../hooks/useToast";
import { FiDollarSign, FiImage, FiType } from "react-icons/fi";
import { MdDescription } from "react-icons/md";

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
        showToast(
          "Complete todos los campos antes de crear un producto!",
          false
        );
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
    <div className="mx-auto mt-11 w-96 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <form onSubmit={addProduct} className="p-6">
        <img
          src={imageUrl || "https://via.placeholder.com/150"}
          className="h-56 w-full object-cover object-center mb-4 rounded-md"
          alt="Imagen del Producto"
        />
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Name
          </label>
          <div className="relative mt-1">
            <input
              id="name"
              type="text"
              value={name}
              onChange={changeNameHandler}
              className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              placeholder="Name of the product"
            />
            <FiType className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Price
          </label>
          <div className="relative mt-1">
            <input
              id="price"
              type="number"
              value={price}
              onChange={changePriceHandler}
              className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              placeholder="Price of the product"
            />
            <FiDollarSign className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Image URL
          </label>
          <div className="relative mt-1">
            <input
              id="imageUrl"
              type="text"
              value={imageUrl}
              onChange={changeImageHandler}
              className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              placeholder="https://example.com"
            />
            <FiImage className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Description
          </label>
          <div className="relative mt-1">
            <textarea
              id="description"
              value={description}
              onChange={changeDescriptionHandler}
              className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
              placeholder="Description of the product"
              rows="3"
            />
            <MdDescription className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
