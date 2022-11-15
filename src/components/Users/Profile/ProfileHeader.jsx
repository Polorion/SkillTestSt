import * as React from "react";
import S from "./Profile.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/img/arrow.svg";

const ProfileHeader = (props) => {
  return (
    <div className={S.body}>
      <NavLink
        onClick={() => {
          props.goToBack();
        }}
      >
        {props.width > 700 ? "назад" : <Back />}
      </NavLink>
      <div className={S.infoImg}>
        <div className={S.img}>
          <img src={props.data?.data.avatar} alt="" />
        </div>
        <div className={S.infoPersona}>
          <div className={S.fullName}>
            <span>{props.data?.data.first_name}</span>

            <span> {props.data?.data.last_name}</span>
          </div>
          <div className={S.infoEmail}>Партнер</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
