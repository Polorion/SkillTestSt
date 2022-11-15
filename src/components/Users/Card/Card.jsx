import * as React from "react";
import S from "./Card.module.scss";
import { ReactComponent as Heart } from "../../../assets/img/heart.svg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const handelClickLike = () => {
    props.like
      ? props.likePhoto(props.id, false)
      : props.likePhoto(props.id, true);
  };
  return (
    <div className={S.card}>
      <div className={S.cardBody}>
        <NavLink to={`/user/${props.id}`}>
          <img src={props.img} alt="" />
        </NavLink>
        <div className={S.name}>
          {props.name} {props.lastName}
        </div>
        <div
          onClick={handelClickLike}
          className={`${S.like} ${props.like && S.active}`}
        >
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default Card;
