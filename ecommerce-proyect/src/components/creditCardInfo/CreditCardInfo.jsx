import React, { useEffect, useState } from "react";
import CreditCard from "../creditCard/CreditCard";

const CreditCardInfo = ({ setIsValid }) => {
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

  useEffect(() => {
    const isValid = () => {
      return (
        name.trim() !== "" &&
        cardNumber.replace(/\s/g, "").length === 16 &&
        cvv.length === 3 &&
        dateExpiry.trim().length === 5 &&
        dateValid.trim().length === 5
      );
    };
    setIsValid(isValid());
  }, [name, cardNumber, dateValid, dateExpiry, cvv, setIsValid]);

  const changeDateValidHandler = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length >= 3) {
      inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2, 4);
    }
    setDateValid(inputValue);
  };
  //probando
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
      <div className="flex pb-3 border-b-2 border-gray-300 px-20">
        <p className="mx-4  font-medium  text-lg">Retiro en sucursal</p>
        <label className="relative inline-flex cursor-not-allowed items-center">
          <input
            id="switch"
            type="checkbox"
            className="peer sr-only"
            checked
            readOnly
          />
          <label className="hidden"></label>
          <div className="peer h-7 w-11 rounded-full border bg-slate-200 after:absolute after:left-[-6px] after:top-0.5 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
        </label>
      </div>
      <hr />
      <h2 className="text-2xl font-bold mb-8 pt-3">Credit Card Information</h2>
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
