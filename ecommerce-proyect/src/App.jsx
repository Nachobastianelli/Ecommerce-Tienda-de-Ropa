import Alerta from "./components/alerta/Alerta";
import Card from "./components/card/Card";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-monumento-bandera">
        <Alerta />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
