import React from "react";
import { useNavigate } from "react-router-dom";

const Init = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/home");
  };

  return (
    <div className="relative w-full h-[calc(100vh-48px)]">
      {" "}
      <img
        src="https://pbs.twimg.com/media/FdLVVEGXEAAvaTl?format=jpg&name=4096x4096"
        alt="Waikiki-Init"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-300 opacity-25"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center text-white">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Waikiki Surf Co.
        </h1>
        <h2 className="text-4xl mt-2">🏄🏼‍♂️🌊</h2>
      </div>
      <button
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl hover:scale-110 transition-transform duration-300 ease-in-out group"
        onClick={clickHandler}
      >
        <span className="text-6xl">☀️</span>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Home
        </span>
      </button>
    </div>
  );
};

export default Init;
