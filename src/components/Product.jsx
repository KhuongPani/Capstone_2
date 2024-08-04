import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.scss";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://shop.cyberlearn.vn/api/Product"
        );
        setProducts(response.data.content); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNowClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.shortDescription}</p>
          <div className="box">
            <p className="product-price">${product.price}</p>
            <button
              className="buy-now-button"
              onClick={() => handleBuyNowClick(product.id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
