import React, { useContext, useEffect, useState, useRef } from "react";
import "../../css/player.css";
import { SongContext } from "../../context/SongContext";

export default function Player({setPlayer}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [seekSliderValue, setSeekSliderValue] = useState(0);

  const { songName, duration, thumbnail, artist, audioContext, playing, setPlaying, sourceNode, setSourceNode, audioBuffer } = useContext(SongContext);

  const animationFrameRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const togglePlayPause = () => {
    if (audioContext && playing) {
      audioContext.suspend().then(() => {
        setPlaying(false);
        cancelAnimationFrame(animationFrameRef.current);
      });
    } else if (audioContext && !playing) {
      audioContext.resume().then(() => {
        setPlaying(true);
        requestAnimationFrame(updateTime);
      });
    }
  };

  const stopPlayback = () => {
    if (audioContext && sourceNode) {
      sourceNode.stop(0);
      sourceNode.disconnect();
      setSourceNode(null);
      setPlaying(false);
      setCurrentTime(0);
      setSeekSliderValue(0);
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const updateTime = () => {
    if (playing && audioContext && sourceNode) {
      const currentTime = audioContext.currentTime - startTime;
      setCurrentTime(currentTime);
      setSeekSliderValue(currentTime);

      if (currentTime >= convertDurationToSeconds(duration)) {
        stopPlayback();
        setPlayer(false);
      } else {
        animationFrameRef.current = requestAnimationFrame(updateTime);
      }
    }
  };

  useEffect(() => {
    if (playing) {
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [playing]);

  const seekSong = (seekTo) => {
    if (audioContext) {
      if (sourceNode) {
        sourceNode.stop(0);
        sourceNode.disconnect();
      }

      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      setSourceNode(source);
      source.start(0, seekTo);
      setStartTime(audioContext.currentTime - seekTo);
      setPlaying(true);
      requestAnimationFrame(updateTime);
    }
  };

  const handleSliderChange = (event) => {
    event.stopPropagation();
    cancelAnimationFrame(animationFrameRef.current);
    setSeekSliderValue(event.target.value);
    const seekTo = event.target.value;
    setCurrentTime(seekTo);
    seekSong(seekTo);
  };

  const convertDurationToSeconds = (duration) => {
    const parts = duration.split(':');
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return (minutes * 60) + seconds;
  };

  let url = thumbnail;
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
        <div id="track-slider-container">
          <input
            type="range"
            id="seek-slider"
            value={seekSliderValue}
            max={convertDurationToSeconds(duration)}
            onChange={handleSliderChange}
          ></input>
          <div id="track-times">
            <div id="current-time" className="time">
              {formatTime(currentTime)}
            </div>
            <div id="duration" className="time">
              {duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


