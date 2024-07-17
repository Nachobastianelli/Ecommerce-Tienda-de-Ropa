import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Fondo } from "../../icons/Icons";

const EditModalOnlyUsers = ({ userInfo, showEditModal, onHide, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    imageUrl: "",
    password: "",
  });

  const { user } = useContext(AuthenticationContext);

  const roleUser = user ? user.role : "";

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo.name || "",
        lastname: userInfo.lastname || "",
        email: userInfo.email || "",
        imageUrl:
          userInfo.imageUrl ||
          "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
        password: userInfo.password || "",
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      role: roleUser,
      imageUrl: formData.imageUrl,
      password: formData.password,
    };
    if (userInfo) {
      onSave(userInfo.id, updatedUserData);
    }
  };

  if (!showEditModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
      <Fondo/>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Edit User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              User name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Lastname
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              ImageUrl
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onHide}
              className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModalOnlyUsers;
