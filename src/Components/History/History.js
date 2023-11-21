import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import Review from '../ReviewItem/Review';
import { removeFromDb } from '../../utilities/StoreData'
const History = () => {
  const { products , previousCart} = useLoaderData();
  const [cart , setCart] = useState(previousCart)

  const handleRemoveItem = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  }
  return (
    <div>
    <div className='row'>
      <div className=' col-md-10 col-sm-12'>
        {
          cart.map(product =>   
          <Review
           key={product.id}
           product={product}
           handleRemoveItem={handleRemoveItem}
          ></Review> )
        }
      </div>
      <div className='order-container col-md-2 col-sm-12'>
        <br />
        <br />
          <div className='summary'>
             <Order cart={cart}></Order>
          </div>
          
      </div>
    </div>
    </div>
  );
};

export default History;