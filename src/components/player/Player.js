import React, { useContext, useEffect, useCallback} from "react";
import "../../css/player.css";
import { SongContext } from "../../context/SongContext";
import { saveAs } from 'file-saver';
import { useAuth0 } from "@auth0/auth0-react";
import {addHistoryByUserSub} from "../../service/HistoryService";



export default function Player({token}) {
  const { 
    audioRef,
    isPlaying, setIsPlaying,
    seekValue, setSeekValue,
    thumbnail,
    songName,
    artist,
    duration,
    setPlayer,
    dialogVisible,
    audioData,
    link
  } = useContext(SongContext);
  const { user } = useAuth0();


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
};

const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
};

const downloadAudio = () => {
  if(audioData === null){
    return;
  }
  addHistoryByUserSub(token, user.sub, link).then(()=>{
    saveAs(audioData, `${songName}.mp3`);
  });
};

const handleKeyPress = useCallback((event) => {
  if(!dialogVisible){
    if (event.code === 'Space') {
      event.preventDefault();
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }
  
    if (event.code === 'ArrowRight') {
      event.preventDefault();
      if (audioRef.current.currentTime + 5 > audioRef.current.duration) {
        audioRef.current.currentTime = audioRef.current.duration;
      }else{
        audioRef.current.currentTime += 5;
      }
    }
  
    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      if (audioRef.current.currentTime - 5 < 0) {
        audioRef.current.currentTime = 0;
      }else{
        audioRef.current.currentTime -= 5;
      }
    }
    if (event.code === 'Escape') {
      event.preventDefault();
      setPlayer(false);
    }
  }
  
}, [isPlaying, dialogVisible]);

useEffect(() => {
  window.addEventListener('keydown', handleKeyPress);
  return () => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}, [handleKeyPress]);

  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value ;
    setSeekValue(event.target.value);
};

  

  const convertDurationToSeconds = (duration) => {
    if(duration ==='')
      return 0;
    const parts = duration.split(':');
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return (minutes * 60) + seconds;
  };


  const updateSeek = () => {
    if(audioRef.current.currentTime === audioRef.current.duration){
      setIsPlaying(false);
      setSeekValue(0);
    }else{
      const value = audioRef.current.currentTime;
      setSeekValue(value);
    }

};

  return (
    <div className="player-container">
      <audio ref={audioRef} onTimeUpdate={updateSeek} style={{ display: "none" }}/>
      <div
        className="player-content"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49%, rgba(0, 0, 0, 0.70) 100%), url(${thumbnail}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="songInfos">
          <div>
            <h1>{songName}</h1>
          </div>
          <div id="artist">
            <h3>{artist}</h3>
          </div>
        </div>
        <div className="control">
          {!isPlaying ? (
            <div className="play-button" onClick={playAudio}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#ffffff"
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                />
              </svg>
            </div>
          ) : (
            <div className="play-button" onClick={pauseAudio}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="#ffffff"
                  d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                />
              </svg>
            </div>
          )}
          <div className="play-button" onClick={downloadAudio}>
            <svg width="1000px" height="1000px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.163 2.819C9 3.139 9 3.559 9 4.4V11H7.803c-.883 0-1.325 0-1.534.176a.75.75 0 0 0-.266.62c.017.274.322.593.931 1.232l4.198 4.401c.302.318.453.476.63.535a.749.749 0 0 0 .476 0c.177-.059.328-.217.63-.535l4.198-4.4c.61-.64.914-.96.93-1.233a.75.75 0 0 0-.265-.62C17.522 11 17.081 11 16.197 11H15V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 2 13.441 2 12.6 2h-1.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zM5 21a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fill="#ffffff"/>
            </svg>
          </div>
          <div id="track-slider-container">
            <input
              type="range"
              id="seek-slider"
              value={seekValue}
              max={convertDurationToSeconds(duration)}
              onChange={handleSeek}
            ></input>
            <div id="track-times">
              <div id="current-time" className="time">
                {formatTime(seekValue)}
              </div>
              <div id="duration" className="time">
                {duration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
