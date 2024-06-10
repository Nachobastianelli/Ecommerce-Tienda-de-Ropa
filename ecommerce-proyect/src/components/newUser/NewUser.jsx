import React, { useState } from "react";

const NewUser = ({
  onAddUser,
  changeNameHandler,
  changeEmailHandler,
  changeRolHandler,
  rol,
  name,
  email,
}) => {
  return (
    <form
      onSubmit={onAddUser}
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
