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

function App() {
  const {
    data: users,
    loading,
    error,
    addData: addUser,
    deleteData: deleteUser,
    updateData: updateUser,
  } = useFetch("http://localhost:8000/users");

  const [editingUser, setEditingUser] = useState(null);
  const { cart } = useCart();

  const addUserHandler = (newUser) => {
    addUser(newUser);
  };

  const deleteUserHandler = (id) => {
    deleteUser(id);
  };

  const updateUserHandler = (id, data) => {
    updateUser(id, data);
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/home",
      element: <Dashboard />,
    },
    {
      path: "/users",
      element: (
        <Users
          users={users}
          onDelete={deleteUserHandler}
          onUpdate={updateUserHandler}
        />
      ),
    },
  ]);

  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
