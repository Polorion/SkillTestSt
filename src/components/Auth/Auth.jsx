import * as React from "react";
import S from "../Register/Register.module.scss";
import MyInput from "../../UI/MyInput/MyInput";
import { NavLink } from "react-router-dom";

const Auth = (props) => {
  return (
    <div className={S.registerBody}>
      {props.error && <div className={S.errorSubmit}>{props.error}</div>}
      <form className={S.form} onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className={S.title}>Login</div>
        {props.inputForm.map((el) => {
          return (
            <MyInput
              key={el.title}
              title={el.title}
              value={el.value}
              placeholder={el.placeholder}
              setValue={el.setValue}
              name={el.name}
              type={el.type}
              register={el.register}
              errors={el.errors}
              rules={el.rules}
              Elem={el.Elem}
              action={el.action}
            />
          );
        })}
        <button className={`${S.btn} ${S.btnSubmit}`} type={"submit"}>
          Войти
        </button>{" "}
        <NavLink className={`${S.btn} ${S.btnReg}`} to={"/register"}>
          Зарегистрироваться
        </NavLink>
      </form>
    </div>
  );
};

export default Auth;
