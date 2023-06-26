import { login, register } from "../Api";
import { ACTION_TYPES } from "../constant/actionTypes";

export const registerUser = (res,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:ACTION_TYPES.USER_REGISTER_REQUEST,payload:{}})
        const {data} = await register(res);
        dispatch({type:ACTION_TYPES.USER_REGISTER_SUCCESS,payload:data});

    } catch (error) {
        dispatch({type:ACTION_TYPES.USER_REGISTER_FAILED,payload:{}});
        console.log(error.message)
    }
}

export const loginUser = (res,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:ACTION_TYPES.USER_LOGIN_REQUEST,payload:{}})
        const {data} = await login(res);
        dispatch({type:ACTION_TYPES.USER_LOGIN_SUCCESS,payload:data});

    } catch (error) {
        dispatch({type:ACTION_TYPES.USER_LOGIN_FAILED,payload:{}});
        console.log(error.message)
    }
}

export const LogoutUser =()=>(dispatch)=>{
    dispatch({type:"LOGOUT"})
}