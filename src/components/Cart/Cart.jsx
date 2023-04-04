import React, { useEffect } from "react";
import ItemDeets from "../ItemDeets/ItemDeets";
import "./cart.css";

const Cart = ({ setQuantity, cart, quantity }) => {
  return (
    <div className="cart-container">
      <button type="button">CartIcon</button>
      {cart.length !== 0 && (
        <ItemDeets cart={cart} quantity={quantity} setQuantity={setQuantity} />
      )}
    </div>
  );
};

export default Cart;
