import { combineReducers } from "redux";
import { users } from "./user";

const  appReducer = combineReducers({users})

export const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        // for all keys defined in your persistConfig(s)
        localStorage.removeItem('persist:store')
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};