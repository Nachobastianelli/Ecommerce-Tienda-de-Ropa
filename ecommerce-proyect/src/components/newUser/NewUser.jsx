import React, { useState } from "react";

const NewUser = ({ addUser, generatedUserId, users }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changeRolHandler = (e) => {
    setRol(e.target.value);
  };

  const submitUserHandler = (event) => {
    event.preventDefault();
    const newUser = {
      userId: generatedUserId(),
      userName: name,
      userEmail: email,
      userRole: rol,
    };
    addUser(newUser);
    setEmail("");
    setName("");
    setRol("");
  };

  return (
    <form
      onSubmit={submitUserHandler}
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
          htmlFor="role"
        >
          Role
        </label>
        <select
          name="role"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={rol}
          onChange={changeRolHandler}
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
          disabled={
            name.trim() === "" || email.trim() === "" || rol === "Select Role"
          }
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default NewUser;
