import { CautionIcon, CloseIcon } from "../../icons/Icons";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const ErrorWinXp = () => {
  const navigate = useNavigate();
  const showToast = useToast();
  const clickHandler = () => {
    navigate("/home");
  };

  const alert = () => {
    showToast("First make a purchase", false);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-WormXp bg-center bg-cover ">
      <div className="h-80 w-1/3 rounded-md bg-gradient-to-l from-blue-500 to-blue-600 border border-black">
        <div className="flex justify-between">
          <div>
            <h1 className="text-white text-5xl ml-7 my-5 font-pixel">Error</h1>
          </div>
          <div className="mr-5 my-5">
            <button
              className="p-3 rounded-sm border-white bg-red-300 bg-opacity-45 border hover:bg-red-600 transition-all duration-150 ease-in-out"
              onClick={clickHandler}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="bg-gray-200 h-56 mx-1 shadow-2xl rounded-sm">
          <div className="flex flex-col ">
            <div className="flex pb-8 mt-10 justify-evenly font-pixel">
              <CautionIcon />
              <p className="text-3xl">Click &ldquo;Home&ldquo; to fix error.</p>
            </div>
            <div className="m-auto ml-40">
              <button
                className="py-2 px-6 border-black border-2 shadow-sm shadow-black hover:bg-gray-300 font-pixel"
                onClick={clickHandler}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorWinXp;
