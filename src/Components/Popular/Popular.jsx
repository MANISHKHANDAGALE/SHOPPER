import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMENS</h1>
        <hr />
        <div className="popular-item">
           {data_product.map((item,i)=>{
             return<Item key={i} name={item.name} image={item.image} id={item.id} old_price={item.old_price} new_price={item.new_price} />
           })}
        </div>
    </div>
  )
}

export default Popular