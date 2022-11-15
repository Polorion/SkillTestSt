import registerUtility from "../../utilit/axiosApi";
const setOwner = "SET_OWNER";
const setErrorAuth = "SET_ERROR_AUTH";
export const authSet = (bool) => {
  return {
    type: setOwner,
    bool,
  };
};
export const setAuthError = (error) => {
  return {
    type: setErrorAuth,
    error,
  };
};

const initialState = {
  isAuth: false,
  error: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OWNER": {
      return { ...state, isAuth: action.bool };
    }
    case "SET_ERROR_AUTH": {
      return { ...state, error: action.error };
    }

    default:
      return state;
  }
};
export default AuthReducer;

export const authThunk = (email, password) => {
  return (dispatch) => {
    registerUtility
      .auth({ email, password })
      .then((response) => {
        if (response.status === 200) {
          dispatch(authSet(true));
          dispatch(setAuthError(""));
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((resp) => {
        if (resp.response.status !== 200) {
          dispatch(setAuthError("не верные пароль или логин"));
        }
      });
  };
};
