import React, { useState } from "react";
import UserItem from "../userItem/UserItem";
import DeleteModal from "../deleteModal/DeleteModal";

const User = ({ users, setEditingUser, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState(-1);

  const showModalHandler = (id) => {
    setShowDeleteModal(true);
    setBookIdToDelete(id);
  };

  const hideModalHandler = () => {
    setShowDeleteModal(false);
    setBookIdToDelete(-1);
  };

  const deleteBookHandler = () => {
    onDelete(bookIdToDelete);
  };

  return (
    <div className="mt-4">
      <DeleteModal
        onDelete={deleteBookHandler}
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
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default User;
