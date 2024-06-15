import React, { useState } from "react";
import UserItem from "../userItem/UserItem";
import DeleteModal from "../deleteModal/DeleteModal";

const User = ({ users, setEditingUser, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(-1);

  const showModalHandler = (id) => {
    setShowDeleteModal(true);
    setUserIdToDelete(id);
  };

  const hideModalHandler = () => {
    setShowDeleteModal(false);
    setUserIdToDelete(-1);
  };

  const deleteUserHandler = () => {
    onDelete(userIdToDelete);
  };

  return (
    <div className="mt-4">
      <DeleteModal
        onDelete={deleteUserHandler}
        showDeleteModal={showDeleteModal}
        onHide={hideModalHandler}
      />
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
            onShowModal={showModalHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default User;
