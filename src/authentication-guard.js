import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Loading  from './page/Loading';

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Loading />
      </div>
    ),
  });

  return <Component />;
};

export default AuthenticationGuard;