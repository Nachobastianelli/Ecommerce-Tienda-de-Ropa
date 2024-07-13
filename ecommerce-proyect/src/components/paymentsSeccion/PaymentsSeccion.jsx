import React from "react";
import CreditCardInfo from "../creditCardInfo/CreditCardInfo";
import InfoPayments from "../infoPayments/InfoPayments";
import {
  CartContext,
  CartProvider,
} from "../../services/cartContext/CartContext";

const PaymentsSeccion = () => {
  return (
    <CartProvider>
      <div className="flex flex-row">
        <div className="w-full flex justify-end mx-15 bg-gray-100 border-e-2 border-e-gray-200 items-center ">
          <CreditCardInfo />
        </div>
        <hr />
        <div className="w-full flex justify-start mx-15">
          <InfoPayments />
        </div>
      </div>
    </CartProvider>
  );
};

export default PaymentsSeccion;
