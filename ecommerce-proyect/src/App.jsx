import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/users/Users";
import Alerta from "./components/alerta/Alerta";
import Login from "./components/login/Login";
import NotFound from "./routes/NotFound";
import { useEffect, useState } from "react";
import NewUser from "./components/newUser/NewUser";

function App() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [typeError, setTypeError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const changeNameHandler = (e) => {
    setName(e.target.value);
    setErrorMessage("");
    setTypeError("");
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
    setTypeError("");
  };

  const changeRoleHandler = (e) => {
    setRole(e.target.value);
    setErrorMessage("");
    setTypeError("");
  };
  const addUser = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || role === "") {
      setTypeError("Error");
      setErrorMessage("Completa todos los campos para enviar el formulario...");
      return;
    }

    const newUser = {
      id: generateUserId(),
      name: name,
      email: email,
      role: role,
    };

    const newListUsers = [newUser, ...users];
    setUsers(newListUsers);
    setTypeError("Success");
    setErrorMessage("El formulario se envio con exito!");
    setEmail("");
    setName("");
    setRole("");
  };

  const generateUserId = () => {
    if (users.length === 0) {
      return 1;
    }

    const ids = users.map((user) => user.id);

    const newId = Math.max(...ids);

    return newId + 1;
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updateUser.id ? updateUser : user))
    );
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    setTypeError("Delete");
    setErrorMessage("Se elimino con exito el usuario");
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
          onAddUser={addUser}
          changeEmailHandler={changeEmailHandler}
          changeNameHandler={changeNameHandler}
          changeRoleHandler={changeRoleHandler}
          role={role}
          name={name}
          email={email}
        />

        {errorMessage && <Alerta type={typeError} message={errorMessage} />}

        {users.length > 0 ? (
          <Users
            users={users}
            setEditingUser={setEditingUser}
            deleteUser={deleteUser}
          />
        ) : (
          <p className="text-center font-bold text-gray-500">
            No hay ningun usuario cargado!
          </p>
        )}
      </div>
    </>
  );
}

export default App;
