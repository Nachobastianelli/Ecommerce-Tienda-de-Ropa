import React, { useState } from "react";
import UserItem from "../userItem/UserItem";
import DeleteModal from "../deleteModal/DeleteModal";
import EditModal from "../editModal/EditModal";

const User = ({ users, onDelete, onUpdate }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(-1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [showEditorsOnly, setShowEditorsOnly] = useState(true);

  const filteredUsers = showEditorsOnly
    ? users.filter((user) => user.role === "Editor")
    : users;

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
    hideModalHandler();
  };

  const showEditModalHandler = (user) => {
    setUserToEdit(user);
    setShowEditModal(true);
  };

  const hideEditModalHandler = () => {
    setShowEditModal(false);
    setUserToEdit(null);
  };

  const updateUserHandler = (id, data) => {
    onUpdate(id, data);
    hideEditModalHandler();
  };

  return (
    <div className="mt-4">
      <DeleteModal
        onDelete={deleteUserHandler}
        showDeleteModal={showDeleteModal}
        onHide={hideModalHandler}
      />
      <EditModal
        user={userToEdit}
        showEditModal={showEditModal}
        onHide={hideEditModalHandler}
        onSave={updateUserHandler}
      />
      <h2 className="text-xl font-semibold">Usuarios</h2>

      <button
        onClick={() => setShowEditorsOnly(!showEditorsOnly)}
        className="m-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:transform active:translate-y-1 focus:ring transition-all"
      >
        {showEditorsOnly
          ? "Mostrar Todos los Usuarios"
          : "Mostrar Solo Editores"}
      </button>
      <ul className="mt-2">
        {filteredUsers.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
            imageUrl={user.imageUrl}
            onShowModal={showModalHandler}
            onEdit={() => showEditModalHandler(user)}
          />
        ))}
      </ul>
    </div>
  );
};

export default User;
