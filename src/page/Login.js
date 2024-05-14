import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

function Login() {
    const {isAuthenticated, user, getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();
    if(isAuthenticated){
        getAccessTokenSilently().then((token) => {
            axios.post('http://localhost:9000/login', {
                email: user.email,
                name: user.name,
                picture: user.picture,
                nickname: user.nickname,
                sub: user.sub
            },{
                headers:{
                    authorization: `Bearer ${token}`,
                }
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            });
            })
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
