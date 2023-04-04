/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import "./product-images.css";

const ProductImages = ({ selectedItem }) => {
  const [selectedImage, setSelectedImage] = useState(selectedItem.images[0]);
  const { images } = selectedItem;

  return (
    <div className="product-images--container">
      <img className="main-image" src={selectedImage} alt="" />
      <div className="mini-images--container">
        {images.map((image) => {
          return (
            <img
              src={image}
              alt={selectedItem.name}
              value={image}
              onClick={(e) => setSelectedImage(e.target.value)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
