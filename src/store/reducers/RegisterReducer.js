import registerUtility from "../../utilit/axiosApi";
import { authSet } from "./AuthReducer";

const passwordChangeVisible = "PASSWORD_CHANGE_VISIBLE";
const setErrorRegister = "SET_ERROR_REGISTER";

export const changeVisible = () => {
  return {
    type: passwordChangeVisible,
  };
};
export const setError = (error) => {
  return {
    type: setErrorRegister,
    error,
  };
};
const initialState = {
  passwordHide: false,
  error: "",
};

const Register = (state = initialState, action) => {
  switch (action.type) {
    case "PASSWORD_CHANGE_VISIBLE": {
      return { ...state, passwordHide: !state.passwordHide };
    }
    case "SET_ERROR_REGISTER": {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};
export default Register;

export const registerThunk = (email, password) => {
  return (dispatch) => {
    registerUtility
      .register({ email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          dispatch(authSet(true));
          dispatch(setError(""));
        }
      })
      .catch((resp) => {
        if (resp.response.status !== 200) {
          dispatch(setError("email занят"));
        }
      });
  };
};
