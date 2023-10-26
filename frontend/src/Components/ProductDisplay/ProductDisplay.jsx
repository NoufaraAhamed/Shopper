import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

function ProductDisplay(props) {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="producdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-old-price">${product.old_price}</div>
          <div className="productdisplay-new-price">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga placeat consectetur, reiciendis, cumque expedita illo esse neque maiores nisi harum libero quisquam ducimus consequuntur ullam. Voluptas rem libero error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste quas repellendus facere aperiam ipsa quidem mollitia. Voluptatum veritatis, dolorum ullam facere voluptates eum quae suscipit minus nostrum, nemo ad.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category : {product.category} </span></p>
        <p className="productdisplay-right-category"><span> Tags : Modern , latest </span></p>

      </div>
    </div>
  );
}

export default ProductDisplay;
