import React from "react";

const CreditCard = ({ name, cardNumber, dateValid, dateExpiry, cvv }) => {
  return (
    <>
      <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/kGkSg1v.png"
        />

        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Name</p>
              <p className="font-medium tracking-widest">{name}</p>
            </div>
            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            <p className="font-medium tracking-more-wider">{cardNumber}</p>{" "}
            {/*4642 3489 9867 7632*/}
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Valid</p>
                <p className="font-medium tracking-wider text-sm">
                  {dateValid}
                </p>{" "}
                {/* 11/15 */}
              </div>
              <div className="">
                <p className="font-light text-xs ">Expiry</p>
                <p className="font-medium tracking-wider text-sm">
                  {dateExpiry}
                </p>{" "}
                {/* 23/22 */}
              </div>

              <div className="">
                <p className="font-light text-xs">CVV</p>
                <p className="font-bold tracking-more-wider text-sm">
                  {cvv}
                </p>{" "}
                {/* --- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
