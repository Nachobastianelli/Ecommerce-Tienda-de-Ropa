import { useContext, useState } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import useFetch from "../../hooks/useFetch";
import useToast from "../../hooks/useToast";

const UserProfile = () => {
  const { user, updateUser } = useContext(AuthenticationContext);
  const { data: users, updateData: updateUserList } = useFetch(
    "http://localhost:8000/users"
  );
  const { showToast } = useToast();

  const [editedUser, setEditedUser] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    password: "",
    confirmPassword: "",
  });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario de actualización de perfil
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (editedUser.password !== editedUser.confirmPassword) {
      showToast("Las contraseñas no coinciden.", false);
      return;
    }

    // Actualizar usuario en el estado local
    updateUser({
      ...user,
      name: editedUser.name,
      lastName: editedUser.lastName,
    });

    // Actualizar usuario en el backend
    const updatedUserData = {
      ...user,
      name: editedUser.name,
      lastName: editedUser.lastName,
      password: editedUser.password, // Recordar añadir lógica segura para actualizar contraseña
    };

    const updatedUsersList = users.map((u) =>
      u.id === user.id ? { ...u, ...updatedUserData } : u
    );

    updateUserList(updatedUsersList);

    // Mostrar alerta de usuario actualizado
    showToast("Usuario actualizado correctamente.", true);

    // Limpiar campos de input
    setEditedUser({
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Name"
            value={editedUser.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={editedUser.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Email"
            value={editedUser.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="New Password"
            value={editedUser.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            value={editedUser.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
