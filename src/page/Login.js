import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Login() {
    const {isAuthenticated, user} = useAuth0();
    const navigate = useNavigate();
    console.log("user", user);  


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
