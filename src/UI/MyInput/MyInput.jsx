import * as React from "react";
import S from "./MyInput.module.scss";

const MyInput = (props) => {
  const handelInput = (e) => {
    props.setValue(e.target.value);
  };
  const action = () => {
    props.action?.change();
  };
  return (
    <div className={S.bodyInput}>
      <div className={S.title}>{props.title}</div>
      <label>
        <input
          className={`${S.input} ${
            props.errors[`${props.name}`] && S.errorInput
          }`}
          value={props.value}
          onInput={handelInput}
          type={props.type}
          {...props.register(`${props.name}`, props.rules)}
          placeholder={props.placeholder}
        />
        {props.Elem && (
          <div className={S.Img} onClick={action}>
            {<props.Elem.View />}
          </div>
        )}
      </label>
      <div className={S.error}>
        {props.errors[`${props.name}`] && (
          <p>
            {props.errors[`${props.name}`]?.message &&
              props.errors[`${props.name}`]?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyInput;
