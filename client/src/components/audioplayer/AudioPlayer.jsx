import './AudioPlayer.css';
import React, { useState, useRef } from 'react';

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
function AudioPlayer(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <audio ref={audioRef} >
        <source src={props.music} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={togglePlay} style={{ marginTop: '10px' }} className='play-button'>
        {isPlaying ? <PauseCircleFilledIcon controls style={{ fontSize: 40 }} /> : <PlayCircleIcon controls style={{ fontSize: 40 }} />}
      </button>
    </div>
  );
}

export default AudioPlayer;
