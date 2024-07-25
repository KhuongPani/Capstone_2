import React from "react";
import "./Banner.css";
import ImgProduct from "../../assets/image2.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="productImg">
        <img src={ImgProduct} alt="Product" />
      </div>

      <div className="title">
        <h1>Product name</h1>
        <h3>Product description ...</h3>
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Banner;
