import * as React from "react";
import S from "./UsersTop.module.scss";

const UsersTop = () => {
  return (
    <div className={S.text}>
      <h1 className={S.title}>Наша команда</h1>
      <p className={S.subTitle}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.{" "}
      </p>
    </div>
  );
};

export default UsersTop;
