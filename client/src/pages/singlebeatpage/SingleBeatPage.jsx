import "./SingleBeatPage.css";
import { BeatsCard } from "../../components/index";
import { publicRequest } from "../../requestapi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addBeat } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"; // Import useLocation
/* import axios from "axios"; */

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function SingleBeatPage() {
  const user = useSelector((state) => state.user.currentUser);
  const [beats, setBeats] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [beat, setBeat] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getBeat = async () => {
      try {
        const res = await publicRequest.get("/beats/find/" + id);
        setBeat(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching beat:", error);
      }
    };
    getBeat();
  }, [id]);

  useEffect(() => {
    const fetchBeats = async () => {
      const res = await publicRequest.get("/beats");
      console.log(res.data);
      setBeats(res.data);
    };
    fetchBeats();
  }, []);

  const handleClick = () => {
    // Check if the user is authenticated (you can modify this condition based on your authentication logic)
    const isAuthenticated = user; // Change this condition to check if the user is logged in

    if (isAuthenticated) {
      // If the user is authenticated, update the cart
      dispatch(addBeat({ beat, price: beat.price }));
    } else {
      // If the user is not authenticated, use window.location to navigate to the login page
     const userConfirmation = window.confirm(
        "You need to login to add beat to the cart. Do you want to Login ?"
      );
      if (userConfirmation) {
        window.location.href = "/signin"; // Redirect to the login page
      }
     
    }
  };

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="container-fluid custom-pad pt-4 wrapper1">
      <div className="leftbeatinfo  ">

        <div className="d-flex flex-column align-items-center">
          <img className="imagesingle" src={PF + beat.img} alt="" />
          <h5 className="mt-3">{beat.title}</h5>
        </div>



        <div className="d-flex flex-row justify-content-around beatsocial pb-3 pt-3">
          <i class="bi bi-heart"></i>
          <i class="bi bi-send"></i>
          <i class="bi bi-plus-square"></i>
        </div>
        <div className="pt-3">
          information
        </div>
        
      </div>
      

      <div className="rightbeatinfo">
        <div className="info1">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h4>Producer : {beat.author}</h4>
            <div className="cartprice ">
              <h5 className="me-3 pricecart">Price : {beat.price} $</h5>
             
                <div className="cart1 text-white  p-2">
                  <i class="bi bi-cart-plus-fill me-2 fs-4"></i>
                  <span className="addtocart mt-1" onClick={handleClick}>
                    Add to Cart
                  </span>
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
