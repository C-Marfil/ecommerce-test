import React from "react";
import "./product-card.css";

const ProductCard = ({
  cart,
  selectedItem,
  quantity,
  setQuantity,
  setCart,
}) => {
  const handleAdd = () => {
    for (let i = 1; i <= quantity; i += 1) {
      setCart((prev) => [...prev, selectedItem]);
    }
  };

  return (
    <div className="product-card-container">
      <h3>Sneaker Company</h3>
      <h1>{selectedItem.name}</h1>
      <p>{selectedItem.description}</p>
      <h1>
        {selectedItem.discounted ? selectedItem.price / 2 : selectedItem.price}
      </h1>
      {selectedItem.discounted && (
        <>
          <h1 className="discount-badge">50%</h1>{" "}
          <p className="full-price-discounted">{selectedItem.price}</p>
        </>
      )}
      <span className="product-card--buttons">
        <button type="button" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
        <p>{quantity}</p>
        <button type="button" onClick={() => setQuantity(quantity - 1)}>
          -
        </button>
        <button type="button" onClick={handleAdd}>
          Add To Cart
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
