import * as React from "react";
import S from "./Profile.module.scss";
import Header from "../../Header/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import { useEffect } from "react";
import { getUserDataThunk } from "../../../store/reducers/UsersReducer";
import { ReactComponent as Mail } from "../../../assets/img/email.svg";

const ProfileContainer = (props) => {
  const location = useLocation();
  const history = useNavigate();
  const goToBack = () => {
    return history(-1);
  };
  useEffect(() => {
    props.getUserDataThunk(parseInt(location.pathname.match(/\d+/)));
  }, []);
  return (
    <div>
      <Header
        isAuth={props.isAuth}
        Elem={ProfileHeader}
        userInfo={props.userInfo}
        goToBack={goToBack}
        width={props.width}
      />
      <div className={S.info}>
        <div className={S.text}>
          {props.userInfo?.support.text} Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Atque cum eaque non placeat, sint suscipit totam
          velit. Aut exercitationem optio quidem recusandae. Ab adipisci alias
          aliquam asperiores assumenda aut culpa deleniti dicta dolores ducimus
          eaque enim error expedita facilis id illo labore laudantium magni
          maiores molestiae natus pariatur placeat provident quaerat, quia
          quisquam saepe sit, soluta temporibus totam unde ut voluptates
          voluptatum. Aperiam assumenda corporis culpa delectus dignissimos est
          fugiat illo impedit ipsam iusto nemo repellendus, sint tenetur totam
          vel? Cum debitis minima officia! Beatae, facere, facilis. Cum
          explicabo officiis qui quibusdam quod. Consequatur dolor id iure nemo
          quia. Doloremque.
        </div>
        <div className={S.contact}>
          <a href={`mailto:${props.userInfo?.data.email}`}>
            <Mail />
            {props.userInfo?.data.email}{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.users.userInfo,
    isAuth: state.auth.isAuth,
    width: state.users.width,
  };
};

export default connect(mapStateToProps, { getUserDataThunk })(ProfileContainer);
