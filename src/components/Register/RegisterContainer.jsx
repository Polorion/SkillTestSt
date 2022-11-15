import * as React from "react";
import { connect } from "react-redux";
import {
  changeVisible,
  registerThunk,
} from "../../store/reducers/RegisterReducer";
import Register from "./Register";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ReactComponent as View } from "../../assets/img/view.svg";

const RegisterContainer = (props) => {
  const [inputName, setInputName] = useState("11");
  const [inputEmail, setInputEmail] = useState("eve.holt@reqres.in");
  const [inputPassword, setInputPassword] = useState("pistol");
  const [inputPasswordTwo, setInputPasswordTwo] = useState("pistol");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    props.registerThunk(data.email, data.password);
  };
  const change = () => {
    props.changeVisible();
  };

  const inputForm = [
    {
      title: "Имя",
      value: inputName,
      placeholder: "имя",
      setValue: setInputName,
      name: "name",
      type: "text",
      register: register,
      errors: errors,
      rules: {
        required: "Обязательное поле",
      },
    },
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
        validate: () =>
          inputPassword === inputPasswordTwo || "пароли не совпадают",
      },
      Elem: { View },
      action: { change },
    },

    {
      title: "Подтвердите пароль",
      value: inputPasswordTwo,
      placeholder: "еще раз пароль",
      setValue: setInputPasswordTwo,
      name: "passwordTwo",
      type: props.passwordHide ? "text" : "password",
      register: register,
      errors: errors,
      rules: {
        required: "Обязательное поле",
        validate: () =>
          inputPassword === inputPasswordTwo || "пароли не совпадают",
      },
      Elem: { View },
      action: { change },
    },
  ];
  return (
    <Register
      inputForm={inputForm}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      error={props.error}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    passwordHide: state.register.passwordHide,
    error: state.register.error,
  };
};

export default connect(mapStateToProps, { registerThunk, changeVisible })(
  RegisterContainer
);
