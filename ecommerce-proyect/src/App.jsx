import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/users/Users";

// import Protected from "./routes/Protected";
// import Alerta from "./components/alerta/Alerta";
// import Card from "./components/card/Card";
import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
import NotFound from "./routes/NotFound";
import { useState } from "react";
import User from "./components/users/Users";
import UserItem from "./components/userItem/UserItem";
import NewUser from "./components/newUser/NewUser";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Editor" },
    { id: 4, name: "Sara Connor", email: "sara@example.com", role: "User" },
    { id: 5, name: "Chris Evans", email: "chris@example.com", role: "Admin" },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const generateUserId = () => {
    if (users.length === 0) {
      return 1;
    }

    const ids = users.map((user) => user.id);

    const newId = Math.max(...ids);

    return newId + 1;
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updateUser.id ? updateUser : user))
    );
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
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
  ]);
  return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen bg-monumento-bandera">
        <Users users={users} />
      </div> */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">User Manager</h1>
        <NewUser
          generateUserId={generateUserId}
          addUser={addUser}
          users={users}
        />
        <Users
          users={users}
          setEditingUser={setEditingUser}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
}

export default App;
