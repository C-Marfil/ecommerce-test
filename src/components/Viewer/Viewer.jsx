import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import ProductImages from "../ProductImages/ProductImages";
import "./viewer.css";

const Viewer = ({ selectedItem, quantity, setQuantity, setCart }) => {
  return (
    <div className="viewer-container">
      <ProductImages selectedItem={selectedItem} />
      <ProductCard
        selectedItem={selectedItem}
        quantity={quantity}
        setQuantity={setQuantity}
        setCart={setCart}
      />
    </div>
  );
};

Viewer.propTypes = {
  selectedItem: PropTypes.shape({
    images: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Viewer;
