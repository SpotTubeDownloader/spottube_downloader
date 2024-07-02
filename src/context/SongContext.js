import React, { createContext, useState, useRef } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [thumbnail, setThumbnail] = useState('');
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState(''); 
  const [duration, setDuration] = useState('');
  const [player, setPlayer] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [link, setLink] = useState('');




  return (
    <SongContext.Provider value={{ 
      audioRef,
      isPlaying, setIsPlaying,
      seekValue, setSeekValue,
      thumbnail, setThumbnail,
      songName, setSongName,
      artist, setArtist,
      duration, setDuration,
      player, setPlayer,
      dialogVisible, setDialogVisible,
      audioData, setAudioData,
      link, setLink
    }}>
      {children}
    </SongContext.Provider>
  );
};
