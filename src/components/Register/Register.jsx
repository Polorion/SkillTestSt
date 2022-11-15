import * as React from "react";
import S from "./Register.module.scss";
import MyInput from "../../UI/MyInput/MyInput";

const Register = (props) => {
  return (
    <div className={S.registerBody}>
      {props.error && <div className={S.errorSubmit}>{props.error}</div>}
      <form className={S.form} onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className={S.title}>Регистрация</div>
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
        <button className={`${S.btn} `} type={"submit"}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;
