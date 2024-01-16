import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="log ms-2 p-2 rounded" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;