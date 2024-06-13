import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = ({ onHide, showDeleteModal, onDelete }) => {
  const deleteUserHandler = () => {
    onDelete();
    onHide();
  };
  const handleClose = () => onHide();
  return (
    <>
      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea eliminar el usuario?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={deleteUserHandler}>
            Eliminar libro
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
