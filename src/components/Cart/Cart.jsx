import React, { useState } from "react";
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

export default Cart;
