import React, { useEffect, useState } from 'react';

import './Carts.css'
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/StoreData';
import { useLoaderData } from 'react-router-dom';



const Carts = () => {
  const products =useLoaderData()
  const [cart ,setCart] = useState([]);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart()
  }
  

  useEffect(()=>{
    const storedCart = getStoredCart();
    const savedCArt=[];
    for(const id in storedCart){
      const addedProduct = products.find(product=>product.id===id)
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity =quantity;
        savedCArt.push(addedProduct);
      }
      

    }
    setCart(savedCArt)
  },[products])

    const addToCartHandler = (selectedproduct) =>{
      let newCart = [];
     const exists = cart.find(product => product.id === selectedproduct.id);
     if(!exists){
      selectedproduct.quantity=1;
      newCart = [...cart, selectedproduct];
     }
     else{
      const rest =cart.filter(product => product.id !== selectedproduct.id);
      exists.quantity= exists.quantity +1 ;
      newCart = [...rest , exists];
     }
     
      setCart(newCart);
      addToDb(selectedproduct.id);

      
    }
  return (
    <div className='row'>
      <div className='product-container col-md-10 col-sm-12'>
        {
          products.map(product=> <Cart 
            key={product.id} 
            product= {product}
            addToCartHandler={addToCartHandler}
            
            
            ></Cart> )
        }
        
          
      </div>
      <div className='order-container col-md-2 col-sm-12'>
        <br />
        <br />
          <div className='summary'>
            <Order clearCart={clearCart} cart = {cart} ></Order>
          </div>
          
      </div>
    </div>
  );
};

export default Carts;