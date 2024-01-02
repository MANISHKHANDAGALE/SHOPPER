import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getdeafaultCart = ()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}
// const getTotalCartItem = () =>{
//     let totalItem =0;
//     for(const item in cartItems)
//     {
//         if (cartItems[item]>0) {
//             totalItem+=cartItems[item]
//         }
//     }
//     return totalItem;
// }

const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems]=useState(getdeafaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue ={all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;