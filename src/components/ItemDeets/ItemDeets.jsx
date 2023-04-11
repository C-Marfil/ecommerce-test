/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import "./itemdeets.css";

const ItemDeets = ({ cart, quantity, setQuantity, isVisible }) => {
  let visibility = "hidden";

  if (isVisible) {
    visibility = "visible";
  }

  const handleRemove = (e) => {
    const index = e.target.value;
    cart.splice(index, 1);
    setQuantity((prev) => prev - 1);
    console.log("this is cart after removal", cart);
  };
  //* this should not be quantity but how many times it is in the array cart
  return (
    <div className={visibility} id="modal-cart">
      <h1 className="header">Cart</h1>
      {cart.map((item, index) => {
        console.log("items at map from cart", item);
        const discountedPrice = item.discounted ? item.price / 2 : item.price;
        const totalAmount = item.discounted
          ? discountedPrice * quantity
          : item.price * quantity;
        return (
          <div className="item-details">
            <span className="container">
              <img className="image" src={item.images[0]} alt="product" />
              <div className="cart-details">
                <h1 className="name">{item.name}</h1>
                <div className="numbers">
                  <p className="price">{`$${discountedPrice}.00 x ${quantity}`}</p>
                  <p className="total">{`$${totalAmount}.00`}</p>
                </div>
              </div>
              <img
                src="../../../images/icon-delete.svg"
                alt="delete"
                value={index}
                onClick={(e) => handleRemove(e)}
                className="bin"
              />
            </span>
          </div>
        );
      })}
      <button className="checkout" type="button">
        Chekout
      </button>
    </div>
  );
};

ItemDeets.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  selectedItem: PropTypes.shape({
    images: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ItemDeets;
