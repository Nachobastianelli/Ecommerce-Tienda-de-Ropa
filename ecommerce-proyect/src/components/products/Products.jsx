import React, { useState, useEffect } from "react";
import ProductItem from "../prodcutItem/ProductItem";
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

  const showEditModalHandler = (products) => {
    setProductToEdit(products);
    setShowEditModal(true);
  };

  const hideEditModalHandler = () => {
    setShowDeleteModal(false);
    setProductToEdit(null);
  };

  const updateProductsHandler = (id, price) => {
    onUpdate(id, price);
    hideEditModalHandler();
  };

  const productMapped = products.map((product) => {
    <ProductItem
      key={product.id}
      id={product.id}
      imageUrl={product.imageUrl}
      name={product.name}
      price={product.price}
      totalPrice={product.totalPrice}
      discount={product.discount}
      product={product}
    />;
  });

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

        {productMapped}
      </div>
    </>
  );
};

export default Products;
