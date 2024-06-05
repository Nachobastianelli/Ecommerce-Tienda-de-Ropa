import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import Protected from "./routes/Protected";
// import Alerta from "./components/alerta/Alerta";
// import Card from "./components/card/Card";
import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
import NotFound from "./routes/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-monumento-bandera">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
