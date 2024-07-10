// components/userAdmin/UserAdmin.jsx
import React from "react";
import NewUser from "../newUser/NewUser";
import Users from "../users/Users";

const UserAdmin = ({ users, onAddUser, onDeleteUser, onUpdateUser }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">User Manager</h1>
        </div>
        <div>
          <button
            className="middle none center mr-3 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            <a href="/home">Home</a>
          </button>
        </div>
      </div>
      <NewUser onAddUser={onAddUser} />
      {users.length > 0 ? (
        <Users users={users} onDelete={onDeleteUser} onUpdate={onUpdateUser} />
      ) : (
        <p className="text-center font-bold text-gray-500">
          No hay ningun usuario cargado!
        </p>
      )}
    </div>
  );
};

export default UserAdmin;
