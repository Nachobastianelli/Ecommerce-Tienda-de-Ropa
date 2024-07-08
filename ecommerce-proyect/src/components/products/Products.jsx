import React, { useState, useEffect, useContext } from "react";
import ProductsItem from "../productsItem/ProductsItem";
import DeleteModal from "../deleteModal/DeleteModal";
import EditModal from "../editModal/EditModal";

const Products = ({ products, onDelete, onUpdate }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(-1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const showModalHandler = (id) => {
    setShowDeleteModal(true);
    setProductIdToDelete(id);
  };

  const hideModalHandler = () => {
    setShowDeleteModal(false);
    setProductIdToDelete(-1);
  };

  const deleteProductHandler = () => {
    onDelete(productIdToDelete);
    hideModalHandler();
  };

  const showEditModalHandler = (product) => {
    setProductToEdit(product);
    setShowEditModal(true);
  };

  const hideEditModalHandler = () => {
    setShowEditModal(false);
    setProductToEdit(null);
  };

  const updateProductsHandler = (id, price) => {
    onUpdate(id, price);
    hideEditModalHandler();
  };

  const productMapped = products.map((product) => (
    <ProductsItem key={product.id} product={product} />
  ));

  return (
    <>
      <div className="mt-4">
        <DeleteModal
          onDelete={deleteProductHandler}
          showDeleteModal={showDeleteModal}
          onHide={hideModalHandler}
        />
        <EditModal
          product={productToEdit}
          showEditModal={showEditModal}
          onHide={hideEditModalHandler}
          onSave={updateProductsHandler}
        />
      </div>
      <div className="flex flex-row flex-wrap mt-24">{productMapped}</div>
    </>
  );
};

export default Products;
