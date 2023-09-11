import './Cart.css';

function Cart({ cartItems }) {
    console.log(cartItems);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.beatname} {item.price} $</li>
          ))}
        </ul>
      )}
    </div>

  )
}

export default Cart