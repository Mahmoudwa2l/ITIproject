import './Cart.css';
import { CartItem, CartCard } from '../../components';
import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import Redirect

function Cart() {
  const cart = useSelector(state => state.cart);

  if (!cart || cart.beats.length === 0) {
    // If there is no cart or the cart is empty, redirect to the sign-in page
    return (
      <>
      <div className='container-fluid bg-customdark custom-pad extrapad'>
      <h2 className='p-5 text-white'>Your Cart is Empty</h2>
     
    </div>

        <NavLink to="/signin">
         go to login 

        </NavLink>
       {/*  <Navigate  />; */}
      </>

    );
   
  }else{

  

  return (
    <div className='container-fluid bg-customdark custom-pad extrapad'>
      <h2 className='p-5 text-white'>Cart</h2>
      <div className="row">
        <div className="col-lg-6 carts">
          <div className="d-flex flex-column p-5">
            {cart.beats.map(beat => (
              <CartItem key={beat.id} beats={beat} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <CartCard beats={cart} />
        </div>
      </div>
    </div>
  );
}
}

export default Cart;
