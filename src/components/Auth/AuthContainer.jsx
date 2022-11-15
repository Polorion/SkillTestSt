import * as React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as View } from "../../assets/img/view.svg";
import { authThunk } from "../../store/reducers/AuthReducer";
import { changeVisible } from "../../store/reducers/RegisterReducer";

const AuthContainer = (props) => {
  const [inputEmail, setInputEmail] = useState("eve.holt@reqres.in");
  const [inputPassword, setInputPassword] = useState("pistol");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    props.authThunk(data.email, data.password);
  };
  const change = () => {
    props.changeVisible();
  };

  const inputForm = [
    {
      title: "Электронная почта",
      value: inputEmail,
      placeholder: "email",
      setValue: setInputEmail,
      name: "email",
      register: register,
      errors: errors,
      rules: {
        required: "Обязательное поле",
        pattern: {
          value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
          message: "Введите коректный Email",
        },
      },
    },
    {
      title: "Пароль",
      value: inputPassword,
      placeholder: "пароль",
      setValue: setInputPassword,
      type: props.passwordHide ? "text" : "password",
      name: "password",
      register: register,
      errors: errors,
      rules: {
        required: "Обязательное поле",
      },
      Elem: { View },
      action: { change },
    },
  ];

  return (
    <div>
      <Auth
        inputForm={inputForm}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        error={props.error}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    passwordHide: state.register.passwordHide,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { authThunk, changeVisible })(
  AuthContainer
);
