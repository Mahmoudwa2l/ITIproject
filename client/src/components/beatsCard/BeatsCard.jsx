import './BeatsCard.css'
/* import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled"; */
import "bootstrap-icons/font/bootstrap-icons.css";

/* import React, { useState, useRef } from 'react'; */
import music from "../../assets/MARWAN_PABLO_-_RACORE.mp3";
import AudioPlayer from "../audioplayer/AudioPlayer";

function BeatsCard({ beats ,addToCart }) {
    
  return (
    <>
      <div className="card-img-top">
        <img className="card-img-top" src={beats.photo} alt="" />
        <div className="play-button-overlay d-flex align-items-center">
          <AudioPlayer music={music}/>
        </div>
      </div>
      <div className="card-body text-white">
        <div className="price d-flex flex-row justify-content-between align-items-center">
            <h6 className='mt-2'>$ {beats.price} </h6>
            <i class="bi bi-bag-plus cartplus " onClick={() => addToCart(beats)}></i>

        </div>
        <h6 className="card-title track-title">{beats.beatname}</h6>
        <div className="row">
          <div className="d-flex flex-row justify-content-between">
            <span className="card-text text-color">{beats.artist}</span>
            <span className="card-text text-color">Details</span>
          </div>
          
        </div>
        
        
      </div>
      
    </>
  )
}

export default BeatsCard