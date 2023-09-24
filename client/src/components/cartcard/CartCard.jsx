import "./CartCard.css";

function CartCard({beats}) {
  return (
    <div className="cart-card text-white ms-md-5">
      <div className="cart-card-row">
        <h5 className="text-white">total : {beats.total} EGP</h5>
        <h5>Cart Summary</h5>
      </div>
      <div className="cart-card-row">
        <h5>Cart Summary</h5>
        <h5>Cart Summary</h5>
      </div>
      <div className="cart-card-row">
        <h5>Cart Summary</h5>
        <h5>Cart Summary</h5>
      </div>
      <div className="cart-card-row">
        <h5>Cart Summary</h5>
        <h5>Cart Summary</h5>
      </div>
    </div>
  );
}

export default CartCard;
