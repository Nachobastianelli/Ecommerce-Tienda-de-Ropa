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
import ProtectedEditor from "./routes/ProtectedEditor";

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
      element: <Navigate to="/init" replace />,
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
              Edit Profile Information
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
          <ProtectedEditor>
            <Header onCartOpen={() => setIsModalOpen(true)} />
            <CartModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
            <main className="flex-grow bg-gray-100">
              <div className="flex items-center justify-center flex-col mt-24 mx-12 rounded-xl p-8 bg-gray-50 shadow-lg">
                <h1 className="text-indigo-600 text-4xl font-bold mb-8 ">
                  Nuevo Producto
                </h1>
                <div className="mb-8">
                  <NewProduct onAddProduct={addProductHandler} />
                </div>
              </div>
            </main>
            <div className="mt-6 bg-gray-300">
              <Footer />
            </div>
          </ProtectedEditor>
        </>
      ),
    },
    {
      path: "/home",

      element: (
        <>
          <Header onCartOpen={() => setIsModalOpen(true)} />

          <div className="bg-gray-50">
            <div className="w-2/3 m-auto">
              <Products
                products={products}
                onDelete={deleteProductHandler}
                onUpdate={updateProductHandler}
              />
            </div>
          </div>
          <CartModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <Footer />
        </>
      ),
    },
    {
      path: "/home/:id",
      element: (
        <>
          <Header onCartOpen={() => setIsModalOpen(true)} />
          <CartModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <div className="flex justify-center items-center bg-gray-100">
            <ProductDetails />
          </div>
          <Footer />
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <Protected>
          <UserAdmin
            users={users}
            onAddUser={addUserHandler}
            onDeleteUser={deleteUserHandler}
            onUpdateUser={updateUserHandler}
          />
        </Protected>
      ),
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
    <CartProvider>
      <AuthenticationContextProvider>
        <RouterProvider router={router} />
      </AuthenticationContextProvider>
    </CartProvider>
  );
}

export default App;
