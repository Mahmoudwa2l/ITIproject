import "./CartItem.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function CartItem({beats}) {
  return (
    <div className="d-flex flex-row cartcard">
      <div className="d-flex flex-column w">
        <div className="text-white d-flex flex-row justify-content-between mb-4">
          <div className="d-flex flex-row align-items-center">
            <i class="bi bi-person-circle color"></i>
            <span className="ms-2 color">{beats.author}</span>

          </div>
        
        <div className="noitems color">1 item: {beats.price} EGP</div>
        </div>

        <div className="d-flex flex-row">
          <img className="imagecart me-3" src={PF + beats.img} alt="" />
          <div className="d-flex flex-column t">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h6 className="carttitle">{beats.title}</h6>
            <h5 className="cartprice text-white fs-sm">{beats.price} EGP</h5>
          </div>
            <div className="d-flex flex-row text-white t2 justify-content-between align-items-center">
              <span className="text-cart-color fs-sm">{beats.author}</span>
              <i className="bi bi-x fs-2 ms-4 x-cart-color"></i>
            </div>
            <div className="d-flex flex-row text-white justify-content-between">
              <span className="text-license fs-sm">Review License</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
