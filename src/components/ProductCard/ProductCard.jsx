import React from "react";
import PropTypes from "prop-types";
import "./product-card.css";

const ProductCard = ({ selectedItem, quantity, setQuantity, setCart }) => {
  const handleAdd = () => {
    for (let i = 1; i <= quantity; i += 1) {
      setCart((prev) => [...prev, selectedItem]);
    }
  };

  return (
    <div className="product-card-container">
      <h3 className="orange-text">SNEAKER COMPANY</h3>
      <h1>{selectedItem.name}</h1>
      <p className="paragraph">{selectedItem.description}</p>
      <span className="price-discount--container">
        <h1 className="actual-price">
          {`$${
            selectedItem.discounted
              ? `${selectedItem.price / 2.0}.00`
              : selectedItem.price
          }`}
        </h1>
        {selectedItem.discounted && (
          <>
            <h1 className="orange-text" id="discount-badge">
              50%
            </h1>
            <p className="crossed-price">{`$${selectedItem.price}`}</p>
          </>
        )}
      </span>
      <span className="product-card--buttons">
        <button
          type="button"
          className="minus"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button
          type="button"
          className="plus"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <button className="add-button" type="button" onClick={handleAdd}>
          Add To Cart
        </button>
      </span>
    </div>
  );
};

ProductCard.propTypes = {
  selectedItem: PropTypes.shape({
    images: PropTypes.string.isRequired,
    discounted: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ProductCard;
