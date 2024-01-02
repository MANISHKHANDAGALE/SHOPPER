import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
<div className="left">
<div className="img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="img">
<img className='main-img' src={product.image} alt="" />
</div>
</div>
<div className="right">
<h1>{product.name}</h1>
<div className="right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
</div>
<div className="right-prices">
    <div className="right-price-old">₹{product.old_price}</div>
    <div className="right-price-new">₹{product.new_price}</div>
</div>
<div className="des">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi blanditiis voluptates consequuntur assumenda, est odit repellendus, enim earum dolore corporis maxime minima laborum, ipsum possimus.
</div>
<div className="right-size">
    <h1>Select Size</h1>
    <div className="right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
</div>
    </div>
  )
}

export default ProductDisplay