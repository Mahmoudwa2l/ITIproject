import { NavLink } from "react-router-dom";
import "./CartCard.css";
import { useSelector } from 'react-redux';

function CartCard({beats}) {
  const cart = useSelector(state=>state.cart);
  return (
    <div className="cart-card text-white ms-md-5">
      <div className="cart-card-row sharecart d-flex flex-row align-items-center">
        <h5>Cart Summary</h5>
        <div className="sharecartbutton">
          <span className="">Share Cart</span>
          <i class="bi bi-share shareicone"></i>

        </div>
        
      </div>
      <div className="cart-card-row incart ">
        
        {cart.beats.map(beat=>(
          <div className="d-flex flex-row justify-content-between mb-3 p-2">
          <div className="d-flex flex-row align-items-center">

            <i class="bi bi-person-circle color"></i>
            <span className="ms-2">{beat.title}</span>

          </div>
          <span>{beat.price} EGP</span>

          </div>

        ))
}
      </div>
      <div className="cart-card-row subtotal">
        <span>Subtotal</span>
        <span>{beats.total} EGP</span>
      </div>
      <div className="cart-card-row ServiceFee">
        <span>Service Fee</span>
        <span>10 EGP</span>
      </div>
      <div className="cart-card-row total">
        <h5>Total ({beats.quantity} Items)</h5>
        <h5>{beats.total+10} EGP</h5>
      </div>
      <div className="cart-card-row cartcardbutton">
        <NavLink to="/checkout"><button className="checkoutbutton">Proceed to Checkout</button> </NavLink>
      </div>
      <div className="cart-card-row policy">
        <span className="policycolor">Please read our <a href="#1">Refund Policy</a></span>
      </div>
    </div>
  );
}

export default CartCard;
