import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

function Login() {
    const {isAuthenticated, user, getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();
    console.log("user", user);  
    if(isAuthenticated){
        getAccessTokenSilently().then((token) => {
            console.log(token);
            axios.get('http://localhost:9000/protected',{
                headers:{
                    authorization: `Bearer ${token}`,
                }
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
      });

  return (
    <div className='Login'>
        <header className='Login-header'>
            <div className='App'>
                <LoginButton />
            </div>
        </header>
    </div>
  );
}

export default Login;
