import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'


const cart = (props) => {
  const { cart , clearCart }= props;

  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (const product of cart){
    quantity = quantity+ product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    tax = (total*0.05).toFixed(0) ;
    grandTotal = total + shipping + parseFloat(tax);
  }
  // let total = 0;
  // let shipping = 0 ;
  // for(const data in cart){
  //   total = total + cart.price ;
  //   shipping = shipping + data.shipping 
  // }
  return (
    <div>
      <h2>Order Summary</h2>
          <br />
          <br />
          
          <div className='text-start'>
            <h5>Selected Items : {quantity} </h5>
            
            <h5>Total Price : ${total} </h5>
            
            <h5>Total Shipping : ${shipping} </h5>
            
            <h5>Tax : ${tax}</h5>
            <br />
            <h5>Grand Total : ${grandTotal}</h5>
          </div>
          <br />
          <div className='d-flex flex-column mb-3'>
            <button onClick={clearCart} className='clear-btn'  ><a className='text-decoration-none text-light' href="">Clear Cart</a> <span> <i className="fa fa-trash-o text-light"></i> </span> </button>
            <br />
            <button className="review-btn"> <a className='text-decoration-none text-light' href='order'>Review cart</a> <span> <FontAwesomeIcon icon={faArrowRightToBracket} /></span> </button>
          </div>
    </div>
  );
};

export default cart;