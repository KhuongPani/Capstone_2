import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import products from "./productsData";

const Product = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-list">
      {products.map((shoe) => (
        <div key={shoe.id} className="product-item">
          <img src={shoe.image} alt={shoe.name} className="product-image" />
          <h2 className="product-name">{shoe.name}</h2>
          <p className="product-description">{shoe.shortDescription}</p>
          <div className="box">
            <button
              className="buy-now-button"
              onClick={() => handleBuyNowClick(shoe.id)}
            >
              Buy Now
            </button>
            <p className="product-price">${shoe.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
