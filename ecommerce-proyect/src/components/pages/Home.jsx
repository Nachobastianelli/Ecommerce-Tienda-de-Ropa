import React, { useState } from "react";
import Products from "../products/Products";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home() {
  const [username, setUsername] = useState("Francesco"); // lógica según login/register
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="bg-slate-200 dark:bg-slate-700 min-h-screen">
      <Header username={username} />
      <main className="bg-slate-100 dark:bg-slate-600 p-4">
      <div className="flex flex-wrap gap-4">
          <Products />
          <Products />
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

export default Home;
