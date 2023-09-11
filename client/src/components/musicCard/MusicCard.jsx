/* import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled"; */
import YouTubeIcon from "@mui/icons-material/YouTube";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MusicCard.css";
import anghami_icon from "../../assets/anghami3.png";
/* import React, { useState, useRef } from 'react'; */
import music from "../../assets/MARWAN_PABLO_-_RACORE.mp3";
import AudioPlayer from "../audioplayer/AudioPlayer";
function MusicCard({ track }) {
/*   const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); */

 /*  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }; */


  /*   const customcard = `${props.width}`; */
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <div className="card-img-top">
        <img className="card-img-top" src={track.photo} alt="" />
        <div className="play-button-overlay d-flex align-items-center">
          <AudioPlayer music={music}/>
        </div>
      </div>
      <div className="card-body text-white">
        <h5 className="card-title">{track.song}</h5>
        <div className="row">
          <div className="col-10 ">
            <span className="card-text ">{track.artist}</span>
          </div>
          <div className="links col-3 d-flex align-items-center">
            <button
              className="icons1  "
              onClick={() => openLink(track.linkyoutube)}
            >
              <YouTubeIcon className="text-danger " style={{ fontSize: 36 }} />
            </button>

            <button
              className="icons "
              onClick={() => openLink(track.linkpotify)}
            >
              <i className="bi bi-spotify text-success size "></i>
            </button>
            <button
              className="icons "
              onClick={() => openLink(track.linkanghami)}
            >
              <img className="anghami text-white " src={anghami_icon} alt="" />
            </button>
          </div>
        </div>
        
        
      </div>
      
    </>
  );
}

export default MusicCard;
