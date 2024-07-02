import React, { useContext } from 'react';
import Navbar from '../components/basicsComponent/Navbar';
import Player from '../components/player/Player';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/home.css';
import '../css/navbar.css';
import { SongContext } from '../context/SongContext';
import axios from 'axios';




function Home() {
  const [token, setToken] = useState('');
  const { isAuthenticated, getAccessTokenSilently,user, logout, isLoading} = useAuth0();
  const navigate = useNavigate();
  const api_url = process.env.REACT_APP_API_URL;
  const {player} = useContext(SongContext);



  useEffect(() => {
    if(!isLoading)
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        setToken(token);
        axios.post(`${api_url}/login`, {
            email: user.email,
            name: user.name,
            picture: user.picture,
            nickname: user.nickname,
            userSub: user.sub
        },{
            headers:{
                authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            if(error.code !=="ECONNABORTED")
                logout({ returnTo: window.location.origin });
        });
        }
    )
    }
  }, [isAuthenticated, getAccessTokenSilently, navigate]);

  return (
      <div className="Home">
        <div className='navbar'>
          <Navbar token={token}/>
        </div>
        {player && (
          <div className='player-div'>
            <Player token={token}/>
          </div>
        )}
      </div>
  );
}

export default Home;
