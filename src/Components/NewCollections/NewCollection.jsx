import React from 'react'
import './NewCollection.css'
import new_collections from '../Assets/new_collections'
import Item from '../Items/Item'
const NewCollection = () => {
  return (
    <div className='popular'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="popular-item">
{new_collections.map((item,i)=>{
    return <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
})}
        </div>
    </div>
  )
}

export default NewCollection