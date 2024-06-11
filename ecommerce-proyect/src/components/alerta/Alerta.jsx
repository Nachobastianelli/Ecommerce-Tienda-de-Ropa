import React from "react";

const Alerta = ({ message, type }) => {
  let estilo;

  if (type === "Error" || type === "Delete") {
    estilo = "red";
  } else if (type === "Warning") {
    estilo = "yellow";
  } else if (type === "Success" || type === "New") {
    estilo = "green";
  }

  return (
    <div className={`bg-${estilo}-900 text-center py-4 lg:px-4 rounded-lg`}>
      <div
        className={`p-2 bg-${estilo}-800 items-center text-${estilo}-100 leading-none lg:rounded-full flex lg:inline-flex`}
        role="alert"
      >
        <span
          className={`flex rounded-full bg-${estilo}-500 uppercase px-2 py-1 text-xs font-bold mr-3`}
        >
          {type}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Alerta;
