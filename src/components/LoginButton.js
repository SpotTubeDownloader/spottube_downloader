import { useAuth0 } from "@auth0/auth0-react";


function LoginButton() {
    const {loginWithPopup, loginWithRedirect} = useAuth0();

    return (   
        <button id="login-button" onClick={() => loginWithRedirect()}>Accedi</button>
    );
  }
  
  export default LoginButton;