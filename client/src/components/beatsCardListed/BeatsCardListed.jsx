import './BeatsCardsListed.css';
import React, { useEffect } from 'react';
/* import AudioPlayer from "../audioplayer/AudioPlayer"; */
/* import music from "http://localhost:3000/assets/MARWAN_PABLO_-_RACORE.mp3"; */

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function BeatsCardListed({beats}) {
    useEffect(() => {
        const onRouteChange = () => {
          window.scrollTo(0, 0); // Scroll to the top of the page
        };
    
        // Attach the event listener
        window.addEventListener('hashchange', onRouteChange);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('hashchange', onRouteChange);
        };
      }, []);
  return (
    <div className="wrapper  d-flex flex-row justify-content-between align-items-center mb-4 ms-3 ">
      <div className="song d-flex flex-row text-white align-items-center">
        {/* <AudioPlayer music="/MARWAN_PABLO_-_RACORE.mp3"/> */}
        <img className="photo1" src={PF + beats.img} alt="" />
        <div className="title d-flex flex-column ms-3">
          <div className="songname">{beats.title}</div>
          <div className="artistname text-color">{beats.author}</div>
        </div>
        
      </div>

      <div className="cart d-flex flex-row  align-items-center ">
      <h6 className='ms-3'>price : {beats.price} $</h6>
      <i className="bi bi-bag-plus cartplus mb-2 ms-3 " ></i> 
    </div>
       

      
    </div>
  )
}

export default BeatsCardListed