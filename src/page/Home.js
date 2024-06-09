import Navbar from '../components/basicsComponent/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/home.css';
import '../css/navbar.css';



function Home() {
    const [token, setToken] = useState('');
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }else{
          getAccessTokenSilently().then((token) => {
            setToken(token);
          });
        }
      });

    return ( 
        <div className="Home">
          <header className="Home-header">
            <Navbar token={token}/>
          </header>
        </div> 
      );
}

export default Home;