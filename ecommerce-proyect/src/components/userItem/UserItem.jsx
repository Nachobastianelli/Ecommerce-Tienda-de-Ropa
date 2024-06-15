import React from "react";

const UserItem = ({ id, name, email, role, imageUrl, onEdit, onShowModal }) => {
  const modalShowHandler = () => {
    onShowModal(id);
  };
  return (
    <>
      <li className="bg-gray-100 p-2 mb-2 flex justify-between items-center rounded">
        <div className="flex flex-row">
          <img
            src={imageUrl}
            alt="User Avatar"
            className="mx-4  rounded-full border size-14 border-gray-300 m-auto"
          />
          <div>
            <p className="font-bold">{name}</p>
            <p>{email}</p>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={modalShowHandler}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default UserItem;
