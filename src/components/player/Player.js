import React, { useContext } from "react";
import { useState } from "react";
import "../../css/player.css";
import { SongContext } from "../../context/SongContext";


export default function Player() {
  const [player, setPlayer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const { songName, duration, thumbnail, artist } = useContext(SongContext);
  console.log("[SongName]: ", songName);
  const togglePlayPause = () => {
    setPlaying(!playing);
  };


  let url =
    thumbnail;
  return (
    <div
      className="player-content"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49%, rgba(0, 0, 0, 0.70) 100%), url(${url}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="songInfos">
        <div>
          <h1>{songName}</h1>
        </div>
        <div>
          <h3>{artist}</h3>
        </div>
      </div>
      <div className="control">
        {!playing ? (
          <div className="play-button" onClick={togglePlayPause}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#ffffff"
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>
          </div>
        ) : (
          <div className="play-button" onClick={togglePlayPause}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#ffffff"
                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
              />
            </svg>
          </div>
        )}
        {/* sostituire i valori che variano con quelli restituiti dallo streamer */}
        <div id="track-slider-container">
          <input type="range" id="seek-slider" max="100"></input>
          <div id="track-times">
            <div id="current-time" class="time">
              0:00
            </div>
            <div id="duration" class="time">
              {duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
