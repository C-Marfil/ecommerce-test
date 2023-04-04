import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "../Header/Header";
import Viewer from "../Viewer/Viewer";

const catalogue = {
  sneakers: {
    name: "Super sneakers legacy great ones",
    description:
      "Come and try them they are actually super duper good quality and worth the price",
    images: [
      "../../../images/image-product-1.jpg",
      "../../../images/image-product-2.jpg",
      "../../../images/image-product-3.jpg",
      "../../../images/image-product-4.jpg",
    ],
    price: 3000,
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
      <h1>Hello</h1>
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
