import React, { useEffect, useState } from 'react';

import './Carts.css'
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import { addToDb } from '../../utilities/StoreData';



const Carts = () => {
  const [products , setProducts] = useState([]);
  const [cart ,setCart] = useState([]);
  
  useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data=> setProducts(data))
  },[]);
    const addToCartHandler = (product) =>{
      console.log(product)
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id)
      
    }
  return (
    <div className='row'>
      <div className='product-container col-md-10 col-sm-12'>
        {
          products.map(product=> <Cart 
            key={product.id} 
            product={product}
            addToCartHandler={addToCartHandler}
            
            ></Cart> )
        }
        
          
      </div>
      <div className='order-container col-md-2 col-sm-12'>
        <br />
        <br />
          <div className='summary'>
            <Order cart = {cart} ></Order>
          </div>
          
      </div>
    </div>
  );
};

export default Carts;