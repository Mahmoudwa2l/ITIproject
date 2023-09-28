import './BeatsCard.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from 'react-router-dom';
import AudioPlayer from "../audioplayer/AudioPlayer";
import { addBeat } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useState } from 'react';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function BeatsCard({ beats }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addBeat({ beat: beats, price: beats.price, image: PF + beats.img }));
    setAddedToBag(true);
    setShowPopUp(true);

    setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
  };
  
  return (
    <>
      <div className="card-img-top">
        <NavLink to={`/beat/${beats._id}`} className="beatcard">
          <img className="card-img-top" src={PF + beats.img} alt="" />
        </NavLink>
        <div className="play-button-overlay d-flex align-items-center">
          <AudioPlayer music="assets/MARWAN_PABLO_-_RACORE.mp3" />
        </div>
      </div>
      <div className="card-body text-white">
        <div className="price d-flex flex-row justify-content-between align-items-center">
          <h6 className='mt-2'>$ {beats.price}</h6>

          <i className="bi bi-bag-plus cartplus" onClick={handleClick}></i>
          
        </div>
        <h6 className="card-title track-title">{beats.title}</h6>
        {showPopUp && (
              <div className={`pop-up ${addedToBag ? 'pop-up-animation' : ''}`}>
                +1
              </div>
            )}
        <div className="row">
          <div className="d-flex flex-row justify-content-between">
            <span className="card-text text-color">{beats.author}</span>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default BeatsCard;
