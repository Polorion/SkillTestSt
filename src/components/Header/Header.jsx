import * as React from "react";
import S from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const handelClick = () => {
    props.logout();
  };
  return (
    <div className={S.header}>
      {props.dop && <div> </div>}
      {props.isAuth && (
        <props.Elem
          data={props.userInfo}
          goToBack={props.goToBack}
          width={props.width}
        />
      )}
      <NavLink onClick={handelClick} to={!props.isAuth ? "/auth" : "/auth"}>
        {!props.isAuth ? "Войти" : "Выйти"}
      </NavLink>
    </div>
  );
};

export default Header;
