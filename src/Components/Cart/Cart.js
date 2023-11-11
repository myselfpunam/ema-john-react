import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'
const Cart = (props) => {
  const {product , addToCartHandler} = props  
  const {name , img, price, ratings ,seller} = product;
  
  return (
    <div className="card">
      <img className='img-fluid' src={img} alt="" />
      <div className="card-body text-start">
        <h5 className="card-title">{name}</h5>
        <h5>Price : $ {price}</h5>
        <br />
        <br />
        <p className="card-text">Manufacturer : {seller} </p>
        <p className="card-text">Rating : {ratings} </p>
        
      </div>
      <div className="card-footer">
        <small onClick={() => addToCartHandler(product)} className="cart-btn text-body-secondary">Add to cart <FontAwesomeIcon icon={faCartShopping} /></small>
      </div>
    </div>
  )
  }


export default Cart;