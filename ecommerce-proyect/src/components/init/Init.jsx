import React from "react";
import { useNavigate } from "react-router-dom";
import { Sun, SurfBoardIcon, WaveIcon, WaveRealIcon } from "../../icons/Icons";

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
        <h1 className="text-6xl font-bold font-macondo text-white drop-shadow-lg flex items-center justify-center">
          <span className="mr-6">
            <WaveRealIcon />{" "}
          </span>
          Waikiki Surf Co.{" "}
          <span className="ml-6">
            <SurfBoardIcon />
          </span>
        </h1>
      </div>
      <button
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl hover:scale-110 transition-transform duration-300 ease-in-out group"
        onClick={clickHandler}
      >
        <Sun />

        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Home
        </span>
      </button>
    </div>
  );
};

export default Init;
