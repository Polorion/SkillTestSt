import * as React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { authSet } from "../../store/reducers/AuthReducer";
import { getUsersThunk, likeUsers } from "../../store/reducers/UsersReducer";
import { useEffect } from "react";
import Header from "../Header/Header";
import UsersTop from "./UsersTop/UsersTop";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsersThunk();
  }, []);

  const likePhoto = (bool, id) => {
    props.likeUsers(bool, id);
  };
  const logout = () => {
    props.authSet(false);
    localStorage.removeItem("token");
  };
  return (
    <div>
      <Header
        dop={true}
        isAuth={props.isAuth}
        logout={logout}
        Elem={UsersTop}
        width={props.width}
      />
      <Users
        user={props.users}
        likePhoto={likePhoto}
        activePage={props}
        countUser={props.countUser}
        allUserCount={props.allUserCount}
        getUsersThunk={props.getUsersThunk}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    activePage: state.users.activePage,
    countUser: state.users.countUser,
    allUserCount: state.users.allUserCount,
    isAuth: state.auth.isAuth,
    width: state.auth.width,
  };
};

export default connect(mapStateToProps, { getUsersThunk, likeUsers, authSet })(
  UsersContainer
);
