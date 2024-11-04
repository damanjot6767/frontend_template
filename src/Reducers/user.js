import { ACTION_TYPES } from "../constant/actionTypes"


const initialData = {
    user: {},
    users: [],
    loader: false,
    isLogedIn: false
}


export const users = (state = initialData, action) => {

    switch (action.type) {

        case ACTION_TYPES.USER_LOGIN_REQUEST:
            return { ...state, loader: true }
        case ACTION_TYPES.USER_LOGIN_SUCCESS: {
            return { ...state, loader: false, isLogedIn: true, user: action?.payload }
        }
        case ACTION_TYPES.USER_LOGIN_FAILED: {
            return { ...state, loader: false }
        }


        case ACTION_TYPES.USER_REGISTER_REQUEST:
            return { ...state, loader: true }
        case ACTION_TYPES.USER_REGISTER_SUCCESS: {
            return { ...state, loader: false, isLogedIn: true, user: action?.payload }
        }
        case ACTION_TYPES.USER_REGISTER_FAILED: {
            return { ...state, loader: false }
        }

        default:
            return state;
    }
}