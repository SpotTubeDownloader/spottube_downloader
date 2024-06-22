import React, { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songName, setSongName] = useState('Undefined');
  const [artist, setArtist] = useState('Undefined'); 
  const [duration, setDuration] = useState('0:00');
  const [thumbnail, setThumbnail] = useState('');

  return (
    <SongContext.Provider value={{ songName, setSongName, artist, setArtist, duration, setDuration, thumbnail, setThumbnail }}>
      {children}
    </SongContext.Provider>
  );
};
