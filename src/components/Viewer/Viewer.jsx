import React from "react";
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

export default Viewer;
