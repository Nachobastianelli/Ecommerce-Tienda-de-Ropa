import React from "react";

const ProductDetail = () => {
  // Aquí puedes obtener los detalles del producto según el ID en la URL
  // Por ejemplo, usando useParams de React Router

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Detalles del Producto
      </h1>
      {/* Mostrar aquí los detalles del producto */}
    </div>
  );
};

export default ProductDetail;
