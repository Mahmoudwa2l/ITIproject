import "./CartItem.css";

function CartItem() {
  return (
    <div className="d-flex flex-row cartcard">
      <div className="d-flex flex-column w">
        <div className="text-white d-flex flex-row justify-content-between mb-4">
          <div className="icon">test1</div>
          <div className="noitems">test2</div>
        </div>

        <div className="d-flex flex-row">
          <img className="imagecart me-3" src="assets/MATADOR.png" alt="" />
          <div className="d-flex flex-column t">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h6 className="carttitle">XXXTentacion x NF Type Beat - "Slow Talk"</h6>
            <h5 className="cartprice text-white fs-sm">$99.95</h5>
          </div>
            <div className="d-flex flex-row text-white t2 justify-content-between align-items-center">
              <span className="text-cart-color fs-sm">Track 99$ UNLIMITED + 100% ROYALTIES BELONG TO THE ARTIST (WAV,MP3,Track Stems)</span>
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
