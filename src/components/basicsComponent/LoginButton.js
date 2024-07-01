import { useAuth0 } from "@auth0/auth0-react";
import '../../css/login.css';



function LoginButton() {
    const {loginWithRedirect} = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/home",
          },
        });
      };
    return (   
        <button id="login-button" onClick={handleLogin}>Accedi</button>
    );
  }
  
  export default LoginButton;