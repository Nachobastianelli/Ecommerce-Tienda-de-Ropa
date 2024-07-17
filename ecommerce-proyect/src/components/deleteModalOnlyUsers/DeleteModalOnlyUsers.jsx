import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
const DeleteModalOnlyUsers = ({ onHide, showDeleteModal, onDelete }) => {
  const { handleLogout } = useContext(AuthenticationContext);
  const deleteUserHandler = () => {
    handleLogout();
    onDelete();
    onHide();
  };

  return (
    <>
      {showDeleteModal && (
        <div
          id="popup-modal"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50 overflow-y-auto"
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={onHide}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 text-center">
              <span className="text-9xl">😭</span>{" "}
              {/* ↑↑↑ Modificar ESTA ↑↑↑ linea para cambiar el icono antes de la entrega */}
              <h3 className="mb-5 mt-3 text-lg font-normal text-gray-500 dark:text-gray-400">
                ¿Está seguro que desea eliminar el usuario?
              </h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
                onClick={deleteUserHandler}
              >
                Eliminar usuario
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 rounded-lg"
                onClick={onHide}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModalOnlyUsers;
