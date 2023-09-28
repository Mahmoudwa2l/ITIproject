import './Cart.css';
import { CartItem ,CartCard} from '../../components';
import { useSelector } from 'react-redux';
/* import React, { useEffect, useState } from "react"; */
/* import axios from "axios"; */
function Cart() {
  const cart = useSelector(state=>state.cart);
  return (
  <div className='container-fluid bg-customdark custom-pad extrapad'>
  <h2 className='p-5 text-white'>Cart</h2>
  <div className="row">
    <div className="col-lg-6 carts">
      <div className="d-flex flex-column p-5">
        {cart.beats.map(beat=>(

          <CartItem  beats={beat}/>

        ))
        }
        
      </div>
    </div>
    <div className="col-lg-6 ">
      
      <CartCard beats={cart}/>
    </div>
  </div>
      
  </div>

  )
}

export default Cart