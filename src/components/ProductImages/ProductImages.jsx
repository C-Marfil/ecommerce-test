/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./product-images.css";

const ProductImages = ({ selectedItem }) => {
  const [selectedImage, setSelectedImage] = useState(selectedItem.images[0]);
  const { images } = selectedItem;

  const handleThumbnail = (e) => {
    const currentThumbnail = e.target.name;
    const thumbnailIndex = images.indexOf(currentThumbnail);
    setSelectedImage(selectedItem.images[thumbnailIndex]);
  };

  return (
    <div className="product-images--container">
      <img className="main-image" src={selectedImage} alt="" />
      <div className="mini-images--container">
        {images.map((image) => {
          return (
            <img
              src={image}
              className="thumbnails"
              alt={selectedItem.name}
              name={image}
              onClick={(e) => handleThumbnail(e)}
            />
          );
        })}
      </div>
    </div>
  );
};

ProductImages.propTypes = {
  selectedItem: PropTypes.shape({
    images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductImages;
