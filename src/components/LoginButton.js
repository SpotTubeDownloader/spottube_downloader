import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div id="login-box">
        <button id="login-button" onClick={() => loginWithRedirect()}>Accedi</button>
      </div>
    )
  )
};

export default LoginButton;