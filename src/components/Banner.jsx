import React from 'react';
import './Banner.scss';
import ImgProduct from '../assets/image2.png';
import ImgBackground from '../assets/image3.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
      <img src={ImgProduct} alt="Product" className="img-product" />
        <div className="banner-content">
          <h1>Product Name</h1>
          <h3>Product Description...</h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
