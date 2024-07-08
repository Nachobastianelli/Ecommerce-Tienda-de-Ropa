import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
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
      path: "/users",
      element: (
        <>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Manager</h1>
            <NewUser onAddUser={addUserHandler} />
            {users.length > 0 ? (
              <Users
                users={users}
                onDelete={deleteUserHandler}
                onUpdate={updateUserHandler}
              />
            ) : (
              <p className="text-center font-bold text-gray-500">
                No hay ningun usuario cargado!
              </p>
            )}
          </div>
        </>
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
