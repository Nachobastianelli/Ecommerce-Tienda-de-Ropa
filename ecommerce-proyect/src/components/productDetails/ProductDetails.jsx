import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-3xl mb-4"> Product not found 😭</div>
        <div>
          <a
            href="/home"
            className="py-2 px-4 flex items-center justify-center bg-indigo-500 text-white rounded-lg"
          >
            Back to Main Menu
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8 mt-28">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <hr className="mb-4" />
          <p className="text-gray-600 mb-4">{product.description}</p>
          <hr className="mb-4" />
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/home")}
              className="py-2 px-4 flex items-center justify-center bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
