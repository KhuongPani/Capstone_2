import React from 'react';
import { useParams } from 'react-router-dom';
import products from './productsData'; 
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p>{product.shortDescription}</p>
          <p className="product-detail-price">Price: ${product.price}</p>
          <div className="product-detail-sizes">
            <span>Sizes: </span>
            {JSON.parse(product.size).map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
