// Import
import { combineReducers } from "redux";

// Actions
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SIGNUP = "SIGNUP";
const CANCEL = "CANCEL";

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
function signup() {
  return {
    type: SIGNUP
  };
}
function cancel() {
  return {
    type: CANCEL
  };
}
// Reducer
const initialState = {
  loginFlg: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return logInDo(state);
    case LOGOUT:
      return logOutDo(state);
    case SIGNUP:
      return signUpDo(state);
    case CANCEL:
      return cancelDo(state);

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
function signUpDo(state) {
  return { loginFlg: false };
}
function cancelDo(state) {
  return { loginFlg: false };
}
// Export Action Creators
const actionCreators = {
  login,
  logout,
  signup,
  cancel
};

export { actionCreators };

// Export Reducer
export default reducer;
