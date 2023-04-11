/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import ItemDeets from "../ItemDeets/ItemDeets";
import "./cart.css";

const Cart = ({ setQuantity, cart, quantity }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-bubble">{cart.length}</h2>
      <img
        className="cart-icon"
        src="../../../images/icon-cart.svg"
        onClick={handleVisibility}
        alt="icon-cart"
      />
      <ItemDeets
        cart={cart}
        quantity={quantity}
        setQuantity={setQuantity}
        isVisible={isVisible}
      />
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      length: PropTypes.number,
    }).isRequired
  ).isRequired,
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default Cart;
