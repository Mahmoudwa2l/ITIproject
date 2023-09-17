import "./MusicCardListed.css";
import React, { useEffect } from 'react';
import YouTubeIcon from "@mui/icons-material/YouTube";
/* import anghami_icon from "http://localhost:3000/assets/anghami3.png"; */
import { NavLink } from "react-router-dom";
/* import AudioPlayer from "../audioplayer/AudioPlayer"; */
/* import music from "http://localhost:3000/assets/MARWAN_PABLO_-_RACORE.mp3"; */
function MusicCardListed({ track }) {
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
        {/* <AudioPlayer music="assets/MARWAN_PABLO_-_RACORE.mp3"/> */}
        <img className="photo1" src={track.photo} alt="" />
        <div className="title d-flex flex-column ms-3">
          <div className="songname">{track.song}</div>
          <div className="artistname text-color">{track.artist}</div>
        </div>
      </div>

      <div className="links d-flex flex-row align-items-center">
        <NavLink to={track.linkyoutube} target="_blank">
          <YouTubeIcon className="text-danger" style={{ fontSize: 36 }} />
        </NavLink>
        <NavLink to={track.linkpotify} target="_black">
          <i className="bi bi-spotify text-success size ms-4 "></i>
        </NavLink>
        <NavLink to={track.linkanghami} target="_blank">
          <img className="anghami text-white ms-4" src="assets/anghami3.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default MusicCardListed;
