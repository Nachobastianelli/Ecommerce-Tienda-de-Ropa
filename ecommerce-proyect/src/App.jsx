import { Route, Router, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Users from "./components/users/Users";
import Login from "./components/login/Login";
import NotFound from "./routes/NotFound";
import { useEffect, useState } from "react";
import NewUser from "./components/newUser/NewUser";
import Home from "./components/pages/Home";
import Products from "./components/products/Products";


const hardcodedUsers = [
  {
    id: 1,
    name: "Ignacio Bastianelli",
    email: "nachobastianelli2003@gmail.com",
    role: "Admin",
    imageUrl:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
  },
  {
    id: 2,
    name: "Danilo Mercado",
    email: "danilomercado61@gmail.com",
    role: "Admin",
    imageUrl:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
  },
  {
    id: 3,
    name: "Francesco Dagostino",
    email: "francesodagostino@gmail.com",
    role: "Admin",
    imageUrl:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
  },
];

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const searchHandler = (searchInput) => {
    if (searchInput === "") setUsers(hardcodedUsers);

    const searchInputUpperCase = searchInput.toUpperCase();
    const usersSearched = hardcodedUsers.filter((user) =>
      user.name.toUpperCase().includes(searchInputUpperCase)
    );
    setUsers(usersSearched);
  };

  useEffect(() => {
    fetch("http://localhost:8000/users", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        const usersMapped = userData
          .map((user) => ({
            ...user,
          }))
          .sort((a, b) => b.id - a.id);
        setUsers(usersMapped);
      })
      .catch((error) => console.log(error));
  }, []);

  const addUserHandler = (newUser) => {
    const userData = { ...newUser };

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors");
        }
      })
      .then(() => {
        const newUsersArray = [userData, ...users];
        setUsers(newUsersArray);
      })
      .catch((error) => console.log(error));
  };

  const deleteUserHandler = (id) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const updateUserHandler = (id, data) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not Ok");
        }
        return response.json();
      })
      .then((updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      })
      .catch((error) => console.error("Error updating user:", error));
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
      element: <Home />
    },
    {
      path: "/users",
      element: <Users/>
    },
  ]);



  return (
    <>
      <div className="container  item-center mx-auto p-4">

        {<RouterProvider router={router} />}
   
      {
        /*
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
           */
      }
      </div>
    </>
  );
}

export default App;

{
  /* <div className="flex justify-center items-center min-h-screen bg-monumento-bandera">
        <Users users={users} />
      </div> */
}
