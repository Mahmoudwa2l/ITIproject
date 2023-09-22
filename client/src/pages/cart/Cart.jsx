import './Cart.css';
import { CartItem ,CartCard} from '../../components';
/* import React, { useEffect, useState } from "react"; */
/* import axios from "axios"; */
function Cart({ cartItems }) {
    console.log(cartItems);
    /* const [beats,setBeats] = useState([])
    useEffect(()=>{
      const fetchBeats = async ()=>{
        const res = await axios.get("beats");
        console.log(res.data);
        setBeats(res.data)
      };
      fetchBeats();
    },[]) */
  return (
    <div className='container-fluid bg-customdark custom-pad'>
  <h2 className='p-5 text-white'>Cart</h2>
  <div className="row">
    <div className="col-lg-6 carts">
      <div className="d-flex flex-column p-5">
        <CartItem />
        <CartItem />
      </div>
    </div>
    <div className="col-lg-6 ">
      <CartCard />
    </div>
  </div>
      
      

  
      {/* {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.beatname} {item.price} $</li>
          ))}
        </ul>
      )} */}
    </div>

  )
}

export default Cart