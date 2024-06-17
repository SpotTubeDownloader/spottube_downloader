import { useAuth0 } from "@auth0/auth0-react";
import '../../css/login.css';



function LoginButton() {
    const {loginWithPopup} = useAuth0();

    return (   
        <button id="login-button" onClick={() => loginWithPopup()}>Accedi</button>
    );
  }
  
  export default LoginButton;