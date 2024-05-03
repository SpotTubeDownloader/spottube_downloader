import React, { useEffect } from 'react';
import LoginButton from '../components/LoginButton';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Login() {
    // get route search parameters
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        // if route parameters.code is not null redirect to /home
        if (params.get('code') !== null) {
            navigate('/home');
        }
    });

    return ( 
        <div className="Login">
          <header className="Login-header">
          <div className="App">
      <header className="App-header">
        <LoginButton />
      </header>
    </div>
          </header>
        </div> 
      );

}

export default Login;