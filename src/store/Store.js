import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import registerReducer from "./reducers/RegisterReducer";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import UsersReducer from "./reducers/UsersReducer";

const redusers = combineReducers({
  register: registerReducer,
  auth: AuthReducer,
  users: UsersReducer,
});

const store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
