// Import
import { combineReducers } from "redux";

// Actions
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Action Creators
function login() {
  return {
    type: LOGIN
  };
}
function logout() {
  return {
    type: LOGOUT
  };
}
// Reducer
const initialState = {
  loginFlg: false
};

function reducer(state = initialState, action) {
  console.log("action:" + action.type);
  switch (action.type) {
    case LOGIN:
      return logInDo(state);
    case LOGOUT:
      return logOutDo(state);
    default:
      return state;
  }
}

// Reducer Functions
function logInDo(state) {
  return { loginFlg: true };
}
function logOutDo(state) {
  return { loginFlg: false };
}
// Export Action Creators
const actionCreators = {
  login,
  logout
};

export { actionCreators };

// Export Reducer
export default reducer;
