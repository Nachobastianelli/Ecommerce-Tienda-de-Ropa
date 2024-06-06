import React from "react";
import UserItem from "../userItem/UserItem";

const User = ({ users, setEditingUser, deleteUser }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Users</h2>
      <ul className="mt-2">
        {users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
            onEdit={setEditingUser}
            onDelete={deleteUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default User;
