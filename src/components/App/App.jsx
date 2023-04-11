/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "../Header/Header";
import Viewer from "../Viewer/Viewer";

const catalogue = {
  sneakers: {
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    images: [
      "../../../images/image-product-1.jpg",
      "../../../images/image-product-2.jpg",
      "../../../images/image-product-3.jpg",
      "../../../images/image-product-4.jpg",
    ],
    price: "250.00",
    discounted: true,
  },
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(catalogue.sneakers);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  return (
    <div className="app-container">
      <Header cart={cart} quantity={quantity} setQuantity={setQuantity} />
      <Viewer
        selectedItem={selectedItem}
        setCart={setCart}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
};

export default App;
