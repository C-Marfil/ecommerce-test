import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <button type="button">Collections</button>
      <button type="button">Men</button>
      <button type="button">Women</button>
      <button type="button">About</button>
      <button type="button">Contact</button>
    </div>
  );
};

export default Nav;
