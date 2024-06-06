import React from "react";

const UserItem = ({ id, name, email, role, onEdit, onDelete }) => {
  return (
    <>
      <li className="bg-gray-100 p-2 mb-2 flex justify-between items-center rounded">
        <div>
          <p className="font-bold">{name}</p>
          <p>{email}</p>
          <p className="text-gray-600">{role}</p>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
            onClick={() => onEdit({ id, name, email, role })}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default UserItem;
