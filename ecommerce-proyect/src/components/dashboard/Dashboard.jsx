import React, { useEffect, useState } from "react";
import Products from "../productsItem/ProductsItem";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("Francesco"); // lógica según login/register
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((productsData) => {
        const productsMapped = productsData
          .map((product) => ({
            ...product,
          }))
          .sort((a, b) => b.id - a.id);
        setProducts(productsMapped);
      })
      .catch((error) => console.log(error));
  });

  const addProductsHandler = (newProduct) => {
    const productData = { ...newProduct };

    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors");
        }
      })
      .then(() => {
        const newProductArray = [productData, ...products];
        setProducts(newProductArray);
      })
      .catch((error) => console.log(error));
  };

  const deleteProductsHandler = (id) => {
    fetch(`http://localhost:8000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((products) => products.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  const updateProductsHandler = (id, data) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not Ok");
        }
        return response.json();
      })
      .then((updateProducts) => {
        setProducts(
          products.map((product) =>
            product.id === id ? updateProducts : product
          )
        );
      })
      .catch((error) => console.log("Error updating user:", error));
  };
  return (
    <div className="bg-slate-200 dark:bg-slate-700 min-h-screen">
      <Header username={username} />
      <main className="bg-slate-100 dark:bg-slate-600 p-4">
        <div className="flex flex-wrap gap-4">
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
