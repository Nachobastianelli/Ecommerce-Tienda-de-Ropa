import { useEffect, useState } from "react";
import { VolumenIcon, WifiIcon, WindowsIcon } from "../../icons/Icons";

const FooterWinError = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const timeString = `${hours}:${minutes}:${seconds}`;

      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const dateString = `${day}/${month}/${year}`;

      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-700 via-blue-500 to-blue-600 p-1">
      <div className="flex justify-between items-center">
        <div className="ml-4 border border-black rounded-lg  ">
          <button className="flex gap-2 p-2 bg-slate-950 bg-opacity-35 hover:bg-gray-500 rounded-lg">
            <WindowsIcon />
            <p className="font-pixel text-xl">Windows</p>
          </button>
        </div>
        <div>
          <h1 className="animate-typing font-pixel overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl text-white font-bold">
            To view the invoices make a purchase...
          </h1>
        </div>
        <div className="flex mr-4 gap-3">
          <div className="border border-black rounded-lg bg-slate-800 bg-opacity-30 hover:bg-gray-500 ">
            <div className="flex p-2 gap-3 my-auto items-center cursor-pointer ">
              <VolumenIcon />
              <WifiIcon />
            </div>
          </div>
          <div className=" flex flex-col ">
            <p className="font-pixel">{currentTime}</p>
            <p className="font-pixel">{currentDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterWinError;
