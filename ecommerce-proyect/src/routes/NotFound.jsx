import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackLoginHandler = () => {
    navigate("/init");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white py-10">
      <div className="container text-center">
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            height: "400px",
          }}
        >
          <h1 className="text-6xl">404</h1>
        </div>
        <div className="mt-6">
          <h2 className="text-4xl">Look like you are lost</h2>
          <p className="mt-4 text-lg">
            The page you are looking for is not available!
          </p>
          <button
            className="mt-6 px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            onClick={goBackLoginHandler}
          >
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
