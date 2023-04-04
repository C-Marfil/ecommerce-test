import React from "react";

const ItemDeets = ({ cart, quantity, setQuantity }) => {
  const handleRemove = (e) => {
    const index = e.target.value;
    cart.splice(index, 1);
    setQuantity((prev) => prev - 1);
    console.log("this is cart after removal", cart);
  };
  //* this should not be quantity but how many times it is in the array cart
  return (
    <>
      {cart.map((item, index) => {
        console.log("items at map from cart", item);
        return (
          <div className="itemdetails">
            <h1>Cart</h1>
            <h1>{item.description}</h1>
            <h1>{item.images[0]}</h1>
            <p>{`${item.price} X ${quantity}`}</p>
            <p>{item.price}</p>
            <button
              type="button"
              value={index}
              onClick={(e) => handleRemove(e)}
            >
              BINLOGO
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ItemDeets;
