import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth.isAuth);
  if (!auth) {
    return <Navigate to={"/auth"} state={{ from: location }} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
