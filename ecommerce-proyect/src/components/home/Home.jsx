import React, { useState } from "react";
import Products from "../products/Products";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home() {
  const [username, setUsername] = useState("Francesco"); //logica segun login/registerd
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <div className="container">
        <Header />
        <div className="container">
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
