import React from "react";
import "./header.css";
import Cart from "../Cart/Cart";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

const Header = ({ setQuantity, cart, quantity }) => {
  return (
    <div className="header-container">
      <img className="logo" src="../../../images/logo.svg" alt="logo" />
      <Nav />
      <Cart cart={cart} quantity={quantity} setQuantity={setQuantity} />
      <Profile />
    </div>
  );
};

export default Header;
