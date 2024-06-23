import React, { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songName, setSongName] = useState('Undefined');
  const [artist, setArtist] = useState('Undefined'); 
  const [duration, setDuration] = useState('0:00');
  const [thumbnail, setThumbnail] = useState('');
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [sourceNode, setSourceNode] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <SongContext.Provider value={{ songName, setSongName, artist, setArtist, duration, setDuration, thumbnail, setThumbnail, audioBuffer, setAudioBuffer, audioContext, setAudioContext, sourceNode, setSourceNode
    , playing, setPlaying
    }}>
      {children}
    </SongContext.Provider>
  );
};
