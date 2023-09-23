import './BeatsCard.css'
/* import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled"; */
import "bootstrap-icons/font/bootstrap-icons.css";
/* import React, { useState, useRef } from 'react'; */
/* import music from "../../assets/MARWAN_PABLO_-_RACORE.mp3";
import AudioPlayer from "../audioplayer/AudioPlayer"; */
import { NavLink } from 'react-router-dom';
import AudioPlayer from "../audioplayer/AudioPlayer";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function BeatsCard({ beats ,addToCart }) {
    
  return (
    <>
    
    <div className="card-img-top">
        <NavLink to="/beat" className="beatcard">
          <img className="card-img-top" src={PF + beats.img} alt="" />
        </NavLink>
        <div className="play-button-overlay d-flex align-items-center">
          <AudioPlayer music="assets/MARWAN_PABLO_-_RACORE.mp3"/>
        </div>
      </div>
      <div className="card-body text-white">
        <div className="price d-flex flex-row justify-content-between align-items-center">
            <h6 className='mt-2'>$ {beats.price} </h6>
            <i class="bi bi-bag-plus cartplus " onClick={() => addToCart(beats)}></i>

        </div>
        <h6 className="card-title track-title">{beats.title}</h6>
        <div className="row">
          <div className="d-flex flex-row justify-content-between">
            <span className="card-text text-color">{beats.author}</span>
          {/*   <NavLink to="/beat" className="card-text text-color">Details</NavLink> */}
            
          </div>
          
        </div>
        
        
      </div>



   
      
      
    </>
  )
}

export default BeatsCard