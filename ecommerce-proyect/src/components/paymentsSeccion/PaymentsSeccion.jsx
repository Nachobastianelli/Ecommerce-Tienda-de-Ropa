import React, { useContext, useState, useEffect } from "react";
import CreditCardInfo from "../creditCardInfo/CreditCardInfo";
import InfoPayments from "../infoPayments/InfoPayments";
import { CartContext } from "../../services/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import Confetti from "react-confetti";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const PaymentsSeccion = ({ onAddInvoice, getLastId }) => {
  const { user } = useContext(AuthenticationContext);
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isCreditCardValid, setIsCreditCardValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setConfetti(true);
    } else {
      setConfetti(false);
    }
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/home");
  };

  const handleBuyClick = () => {
    if (isCreditCardValid) {
      let lastId = getLastId();
      const newInvoice = {
        id: lastId + 1,
        userId: user.id,
        products: cart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        totalPrice: cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };
      console.log(newInvoice);
      onAddInvoice(newInvoice);
      clearCart();
      localStorage.removeItem("cart");
      showToast("Successful purchase!", true);
      handleOpenModal();
    } else {
      showToast("Invalid card details", false);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-full flex justify-end mx-15 bg-gray-100 border-e-2 border-e-gray-200 items-center">
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
              className="py-2 px-4 bg-blue-500 rounded-lg flex justify-center items-center text-xl text-white cursor-pointer my-2 hover:bg-blue-600"
            >
              Home
            </button>
            <button
              onClick={handleBuyClick}
              className="py-2 px-4 bg-indigo-500 rounded-lg flex justify-center items-center text-xl text-white cursor-pointer my-2 hover:bg-indigo-600"
            >
              Buy
            </button>
          </div>
          {isModalOpen && (
            <>
              <div
                className="fixed inset-0 bg-sky-200 opacity-100"
                onClick={handleCloseModal}
              />
              <div className="fixed inset-0 flex justify-center items-center z-20 h-screen overflow-hidden">
                <div className="sm:w-[385px] sm:min-w-[40vw] min-w-[100vw] min-h-[30vh] flex flex-col items-center gap-2 p-6 bg-[#FFFFEB] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-2xl font-medium">
                    Payment Successful
                  </span>
                  <p className="text-center mt-3">
                    Thank you for your purchase! 🛒
                    <br />
                    We appreciate your trust in us and hope you enjoy your
                    purchase. ❤️
                  </p>
                  <button
                    className="p-3 mt-6 bg-[#4F46E5] rounded-lg w-full text-white"
                    onClick={handleCloseModal}
                  >
                    Back to home
                  </button>
                </div>
              </div>
              {confetti && (
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  numberOfPieces={800}
                  recycle={true}
                  gravity={0.08}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentsSeccion;
