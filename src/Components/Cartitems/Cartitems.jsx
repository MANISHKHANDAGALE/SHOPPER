import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
  const {all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
<div className="main-format">
  <p>Products</p>
  <p>Title</p>
  <p>Price</p>
  <p>Quantity</p>
  <p>Total</p>
  <p>Remove</p>
</div>
<hr />
{all_product.map((e)=>{
  if(cartItems[e.id]>0){
return <div>
<div className="format main-format">
  <img className='product-icon' src={e.image} alt="" />
  <p>{e.name}</p>
  <p>{e.new_price}</p>
  <button className='quantity'>{cartItems[e.id]}</button>
  <p>{e.new_price*cartItems[e.id]}</p>
  <img className='remove_icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
</div>
<hr />
</div>
  }
  return null;
})}
    </div>
  )
}

export default Cartitems