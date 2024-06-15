import React, { useState } from "react";
import Alerta from "../alerta/Alerta";

const NewUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [typeError, setTypeError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
    setTypeError("");
    setErrorMessage("");
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
    setTypeError("");
    setErrorMessage("");
  };

  const changeRoleHandler = (e) => {
    setRole(e.target.value);
    setTypeError("");
    setErrorMessage("");
  };

  const changeImageHandler = (e) => {
    setImageUrl(e.target.value);
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
      name: name,
      email: email,
      role: role,
      imageUrl: imageUrl.length
        ? imageUrl
        : "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
    };

    onAddUser(newUser);
    setTypeError("Success");
    setErrorMessage("El formulario se envio con exito!");
    setEmail("");
    setName("");
    setRole("");
    setImageUrl("");
  };

  return (
    <>
      <form
        onSubmit={addUser}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit User</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeNameHandler}
            placeholder="Enter user name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmailHandler}
            placeholder="Enter email address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            ImageUrl
          </label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={changeImageHandler}
            placeholder="Enter imageUrl"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            name="role"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={role}
            onChange={changeRoleHandler}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // disabled={name.trim() === "" || email.trim() === "" || role === ""}
          >
            Add User
          </button>
        </div>
      </form>
      {errorMessage && <Alerta type={typeError} message={errorMessage} />}
    </>
  );
};

export default NewUser;
