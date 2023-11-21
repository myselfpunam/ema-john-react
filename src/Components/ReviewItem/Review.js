
import React from 'react';
import './Review.css'

const Review = ({product , handleRemoveItem}) => {
  return (
    <div className='container'>
      <div className='img-container '>
        <img  src={product.img} alt="" />
      </div>
      
      <div className='info-container'>
      <div className='text-start'>
        <h3>{product.name}</h3>
        <h5>Price : {product.price}</h5>
        <h5>Quantity: {product.quantity}</h5>
      </div>
      <div >
        
      <button onClick={() => handleRemoveItem(product.id)} className='icon'><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button> 
      </div>
      </div>
      
    </div>
  );
};

export default Review;