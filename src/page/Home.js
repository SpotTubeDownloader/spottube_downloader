import React from 'react';
import Navbar from '../components/basicsComponent/Navbar';
import Player from '../components/player/Player';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/home.css';
import '../css/navbar.css';
import { SongProvider } from '../context/SongContext';

function Home() {
  const [token, setToken] = useState('');
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [ player, setPlayer ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    } else {
      getAccessTokenSilently().then((token) => {
        setToken(token);
      });
    }
  }, [isAuthenticated, getAccessTokenSilently, navigate]);

  return (
    <SongProvider>
      <div className="Home">
        <div className='navbar'>
          <Navbar token={token} setPlayer={setPlayer}/>
        </div>
        {player && (
          <div className='player-div'>
            <Player setPlayer={setPlayer}/>
          </div>
        )}
      </div>
    </SongProvider>
  );
}

export default Home;
