import LoginButton from '../components/basicsComponent/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../css/login.css';




function Login() {
    const {isAuthenticated} = useAuth0();
    const navigate = useNavigate();

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
