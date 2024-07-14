import React, { useContext, useState } from "react";
import CreditCardInfo from "../creditCardInfo/CreditCardInfo";
import InfoPayments from "../infoPayments/InfoPayments";
import {
  CartContext,
  CartProvider,
} from "../../services/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const PaymentsSeccion = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isCreditCardValid, setIsCreditCardValid] = useState(false);

  const clickHandler = () => {
    if (isCreditCardValid) {
      clearCart();
      localStorage.removeItem("cart");
      showToast("Compra realizada con exito!", true);
      navigate("/home");
    } else {
      showToast("Datos de tarjeta inválidos", false);
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-row ">
        <div className="w-full flex justify-end mx-15 bg-gray-100 border-e-2 border-e-gray-200 items-center ">
          <CreditCardInfo setIsValid={setIsCreditCardValid} />
        </div>
        <hr />
        <div className="w-full flex flex-col justify-start mx-15">
          <div>
            <InfoPayments />
          </div>
          <div>
            <div className="flex gap-2 justify-end max-w-xl mr-20 my-5">
              <button
                onClick={() => navigate("/home")}
                className="py-2 px-4 bg-blue-500 rounded-lg flex justify-center items-center text-xl text-white cursor-pointer my-2"
              >
                Home
              </button>
              <button
                onClick={clickHandler}
                className="py-2 px-4 bg-indigo-500 rounded-lg flex justify-center items-center text-xl text-white cursor-pointer my-2"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default PaymentsSeccion;
