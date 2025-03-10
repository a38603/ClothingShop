import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        {/* 4 ảnh mô tả chi tiết sản phẩm*/}
        <div className="productdisplay-img-list">
          <img src={product.image} alt=''></img>
          <img src={product.image} alt=''></img>
          <img src={product.image} alt=''></img>
          <img src={product.image} alt=''></img>
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-start">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122 REVIEWS</p>
        </div>
        <div className="productdisplay-righ-prices">
          <div className="productdisplay-righ-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-righ-price-old">
            ${product.old_price}
          </div>

        </div>
        <div className="productdisplay-right-description">
          description a light weight , ussally knitted , pullover shirt, close-fitting and ahdjafe.....
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:</span>{product.category}</p>
        <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest.</p>
      </div>
    </div>
  )
}

export default ProductDisplay
