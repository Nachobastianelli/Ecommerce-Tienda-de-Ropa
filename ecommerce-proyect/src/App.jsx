import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Users from "./components/users/Users";
import UserProfile from "./components/users/UserProfile";
import Login from "./components/login/Login";
import NotFound from "./routes/NotFound";
import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart";
import NewUser from "./components/newUser/NewUser";
import useFetch from "./hooks/useFetch";
import Products from "./components/products/Products";
import Header from "./components/header/Header";
import CartModal from "./components/cartModal/CartModal";
import { CartProvider } from "./services/cartContext/CartContext";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Protected from "./routes/Protected";
import UserAdmin from "./components/userAdmin/UserAdmin";
import ProductDetails from "./components/productDetails/ProductDetails";
import NewProduct from "./components/newProduct/NewProduct";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context";
import CreditCardInfo from "./components/creditCardInfo/CreditCardInfo";
import InfoPayments from "./components/infoPayments/InfoPayments";
import PaymentsSeccion from "./components/paymentsSeccion/PaymentsSeccion";
import Init from "./components/init/Init";
import Message from "./components/message/Message";

function App() {
  const {
    data: users,
    loading,
    error,
    addData: addUser,
    deleteData: deleteUser,
    updateData: updateUser,
  } = useFetch("http://localhost:8000/users");

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
    addData: addProduct,
    deleteData: deleteProduct,
    updateData: updateProduct,
  } = useFetch("http://localhost:8000/products");

  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  const addUserHandler = (newUser) => {
    addUser(newUser);
  };

  const addProductHandler = (newProduct) => {
    addProduct(newProduct);
  };

  const deleteUserHandler = (id) => {
    deleteUser(id);
  };

  const deleteProductHandler = (id) => {
    deleteProduct(id);
  };

  const updateUserHandler = (id, data) => {
    updateUser(id, data);
  };

  const updateProductHandler = (id, data) => {
    updateProduct(id, data);
  };

  const router = createBrowserRouter([
    {
      path: "/register",
      element: (
        <>
          <div className="flex justify-center items-center min-h-screen bg-gray-400">
            <Register />,
          </div>
        </>
      ),
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/login",
      element: (
        <>
          <div className="flex justify-center items-center min-h-screen bg-gray-400">
            <Login />,
          </div>
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400">
            <h1 className="text-3xl font-bold mb-8">
              Editar Información del Perfil
            </h1>
            <UserProfile />
          </div>
        </>
      ),
    },
    {
      path: "/NewProduct",
      element: (
        <>
          <Header />
          <div className="flex items-center justify-center flex-col bg-gray-100 mt-24 mx-12 rounded-xl">
            <h1 className="text-indigo-600 text-3xl mt-12"> New Product</h1>
            <NewProduct onAddProduct={addProductHandler} />
          </div>
          <Footer />
        </>
      ),
    },
    {
      path: "/home",

      element: (
        <CartProvider>
          <Header onCartOpen={() => setIsModalOpen(true)} />
          <Products
            products={products}
            onDelete={deleteProductHandler}
            onUpdate={updateProductHandler}
          />
          <CartModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <Footer />
        </CartProvider>
      ),
    },
    {
      path: "/home/:id",
      element: (
        <>
          <Header />
          <div className="flex justify-center items-center bg-gray-100">
            <ProductDetails />
          </div>
          <Footer />
        </>
      ),
    },
    {
      path: "/users",
      element: <Protected />,
      Children: {
        path: "/users",
        element: (
          <UserAdmin
            users={users}
            onAddUser={addUserHandler}
            onDeleteUser={deleteUserHandler}
            onUpdateUser={updateUserHandler}
          />
        ),
      },
    },
    {
      path: "/payments",
      element: <PaymentsSeccion />,
    },
    {
      path: "/init",
      element: (
        <div className="flex flex-col h-screen overflow-hidden">
          <Message />
          <Init />
        </div>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <AuthenticationContextProvider>
      <RouterProvider router={router} />
    </AuthenticationContextProvider>
  );
}

export default App;
