import React, { useState, useEffect } from "react";

const Message = () => {
  const texto = [
    "15% De descuento abonando en transferencia",
    "Envíos gratis a partir de $100.000",
    "Hasta 9 cuotas sin interés",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texto.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [texto.length]);

  return (
    <div className="flex bg-gradient-to-r from-pink-300 to-orange-400 text-white h-12 items-center justify-center">
      <h2 className="text-white text-center font-semibold text-xl">
        <span className="pr-4 font-bold">&lt;</span>
        {texto[currentTextIndex]}
        <span className="pl-4 font-bold">&gt;</span>
      </h2>
    </div>
  );
};

export default Message;
