import * as React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuth);
  if (auth) {
    return <Navigate to={"/"} />;
  }
  return <div>{children}</div>;
};

export default LoginRoute;
