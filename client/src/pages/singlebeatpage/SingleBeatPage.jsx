import "./SingleBeatPage.css";
import { BeatsCard } from "../../components/index";
import { publicRequest } from "../../requestapi";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import {addBeat} from "../../redux/cartRedux";
import {useDispatch} from "react-redux";
/* import axios from "axios"; */
import {useLocation} from "react-router-dom";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function SingleBeatPage() {
  const [beats, setBeats] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [beat,setBeat] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{
    const getBeat = async ()=>{
      try{
        const res = await publicRequest.get("/beats/find/" + id);
        setBeat(res.data);
        console.log(res.data);

      }catch{}
    };
    getBeat();
  },[id]);


  useEffect(() => {
    const fetchBeats = async () => {
      const res = await publicRequest.get("/beats");
      console.log(res.data);
      setBeats(res.data);
    };
    fetchBeats();
  }, []);

  const hanldeClick = () =>{
    
      // Update cart
      dispatch(addBeat({ beat ,price:beat.price}));
    
    
  };
  const cart = useSelector(state=>state.cart)
  console.log(cart);
  return (
    <div className="contaier-fluid custom-pad pt-4 wrapper1">
      <div className="leftbeatinfo text-center">
        <img className="imagesingle" src={PF + beat.img} alt="" />
        <h5 className="mt-3">{beat.title}</h5>
      </div>

      <div className="rightbeatinfo">
        <div className="info1">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h4>Producer : {beat.author}</h4>
            <div className="cartprice ">
              <h5 className="me-3 pricecart">Price : {beat.price} $</h5>
              <div className="cart1 text-white  p-2">
                <i class="bi bi-cart-plus-fill me-2 fs-4"></i>
                <span className="addtocart mt-1" onClick={hanldeClick} >Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
        <div className="info2">
          <h4>Licensing</h4>
        </div>

        <div className="info3">
          <h2 className="titleinfo3">Explore More Beats</h2>
          <div className="container-lg scrollmenu">
            {beats.slice(0, 4).map((b) => (
              <div className="card musiccardwidth1" key={b.id}>
                <BeatsCard beats={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBeatPage;
