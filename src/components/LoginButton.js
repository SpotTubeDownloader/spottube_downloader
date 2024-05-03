import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button id="login-button" onClick={() => loginWithRedirect()}>Accedi</button>
    )
  )
};

export default LoginButton;