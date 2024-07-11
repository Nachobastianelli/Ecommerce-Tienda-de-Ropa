import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Users from "./components/users/Users";
import Login from "./components/login/Login";
import NotFound from "./routes/NotFound";
import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
