import Navbar from '../components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Home() {

    const {isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
      });

    return ( 
        <div className="Home">
          <header className="Home-header">
            <Navbar />
          </header>
        </div> 
      );
}

export default Home;