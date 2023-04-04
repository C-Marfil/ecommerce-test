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
      <button type="button" onClick={handleVisibility}>
        CartIcon
      </button>
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
