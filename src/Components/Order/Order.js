import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const cart = (props) => {
  const { cart }= props;

  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const product of cart){
    total = total + product.price;
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
            <h5>Selected Items : {cart.length} </h5>
            
            <h5>Total Price : ${total} </h5>
            
            <h5>Total Shipping : ${shipping} </h5>
            
            <h5>Tax : ${tax}</h5>
            <br />
            <h5>Grand Total : ${grandTotal}</h5>
          </div>
          <br />
          <div className='d-flex flex-column mb-3'>
            <button className='clear-btn'>Clear Cart <span> <i class="fa fa-trash-o"></i> </span> </button>
            <br />
            <button className="review-btn">Review cart <span> <FontAwesomeIcon icon={faArrowRightToBracket} /></span> </button>
          </div>
    </div>
  );
};

export default cart;