import React, { useState } from "react";
import CreditCard from "../creditCard/CreditCard";

const CreditCardInfo = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [dateValid, setDateValid] = useState("");
  const [dateExpiry, setDateExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeCardNumberHandler = (e) => {
    setCardNumber(
      e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    );
  };

  const changeDateValidHandler = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length >= 3) {
      inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2, 4);
    }
    setDateValid(inputValue);
  };

  const changeDateExpiryHandler = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length >= 3) {
      inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2, 4);
    }
    setDateExpiry(inputValue);
  };

  const changeCvvHandler = (e) => {
    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Credit Card Information</h2>
      <div className="mb-8">
        <CreditCard
          name={name}
          cardNumber={cardNumber}
          dateValid={dateValid}
          dateExpiry={dateExpiry}
          cvv={cvv}
        />
      </div>
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={changeNameHandler}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={changeCardNumberHandler}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="dateValid"
          >
            Valid Date
          </label>
          <input
            type="text"
            id="dateValid"
            value={dateValid}
            onChange={changeDateValidHandler}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="MM/YY"
            maxLength="5"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="dateExpiry"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="dateExpiry"
            value={dateExpiry}
            onChange={changeDateExpiryHandler}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="MM/YY"
            maxLength="5"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="cvv"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={changeCvvHandler}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="123"
            maxLength="3"
          />
        </div>
      </form>
    </div>
  );
};

export default CreditCardInfo;
