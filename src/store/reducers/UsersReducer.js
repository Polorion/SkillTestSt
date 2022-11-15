import registerUtility from "../../utilit/axiosApi";
const setAllUser = "SET_ALL_USER";
const addLike = "ADD_LIKE";
const setPagination = "SET_PAGINATION";
const getUser = "GET_USER";
const widthSet = "WIDTH_SET";
export const likeUsers = (id, bool) => {
  return {
    type: addLike,
    id,
    bool,
  };
};
export const setWidthPage = (number) => {
  return {
    type: widthSet,
    number,
  };
};
export const getUserData = (user) => {
  return {
    type: getUser,
    user,
  };
};
export const paginationSet = (countUser, allUserCount) => {
  return {
    type: setPagination,
    countUser,
    allUserCount,
  };
};
export const getUsers = (newUser) => {
  return {
    type: setAllUser,
    newUser,
  };
};

const initialState = {
  width: "",
  users: [],
  activePage: 1,
  countUser: 0,
  allUserCount: 0,
  userInfo: null,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        userInfo: action.user,
      };
    case "WIDTH_SET":
      return {
        ...state,
        width: action.number,
      };
    case "SET_ALL_USER":
      return {
        ...state,
        users: action.newUser,
      };
    case "SET_PAGINATION":
      return {
        ...state,
        countUser: action.countUser,
        allUserCount: action.allUserCount,
      };

    case "ADD_LIKE":
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.id) {
            return { ...el, like: action.bool };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
};
export default UsersReducer;

export const getUsersThunk = (page) => {
  return (dispatch) => {
    registerUtility
      .getUsers(page)
      .then((response) => {
        dispatch(paginationSet(response.data.per_page, response.data.total));
        dispatch(getUsers(response.data.data));
      })
      .catch((resp) => {});
  };
};
export const getUserDataThunk = (id) => {
  return (dispatch) => {
    registerUtility
      .getUserData(id)
      .then((response) => {
        dispatch(getUserData(response.data));
      })
      .catch((resp) => {});
  };
};
