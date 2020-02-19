import { combineReducers } from "redux";

const LOGIN = "LOGIN";

export const login = () => ({type:LOGIN});

const initialState = {
    loginFlg: false
};

const loginFlg = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return { loginFlg: true };
        default:
            return { loginFlg: initialState.loginFlg }
    }
}

const buttonApp = combineReducers({
    loginFlg
}); 

export default buttonApp;
