import * as React from "react";
import { Route, Routes } from "react-router-dom";
import AuthContainer from "../components/Auth/AuthContainer";
import RegisterContainer from "../components/Register/RegisterContainer";
import PrivateRoute from "../HOK/PrivateRoute";
import LoginRoute from "../HOK/LoginRoute";
import UsersContainer from "../components/Users/UsersContainer";
import ProfileContainer from "../components/Users/Profile/ProfileContainer";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <PrivateRoute>
              <UsersContainer />
            </PrivateRoute>
          }
        ></Route>{" "}
        <Route
          path={"/user/*"}
          element={
            <PrivateRoute>
              <ProfileContainer />
            </PrivateRoute>
          }
        ></Route>{" "}
        <Route
          path={"/auth"}
          element={
            <LoginRoute>
              <AuthContainer />
            </LoginRoute>
          }
        ></Route>
        <Route
          path={"/register"}
          element={
            <LoginRoute>
              <RegisterContainer />{" "}
            </LoginRoute>
          }
        ></Route>
        <Route path={"/*"} element={<div> страница не найдена404</div>} />
      </Routes>
    </>
  );
};

export default AppRouter;
