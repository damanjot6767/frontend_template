import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "../Actions/auth";

export const PrivateRoute = ({children}) => {
    const { isLogedIn } = useSelector((state)=>state.users)
    const dispatch = useDispatch()

   
    if(!isLogedIn){
        return <Navigate to="/login"/>
    }

    return children 
}