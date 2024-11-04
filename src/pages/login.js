import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "../Actions/auth";
import { Button } from "../components/ui/button";

export const Login = () => {
    const { isLogedIn } = useSelector((state)=>state.users)
    const dispatch = useDispatch()

    if(isLogedIn){
        return <Navigate to="/logout"/>
    }

    const handleLogin = ()=>{
        dispatch(loginUser({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }))
    }

    return (
        <Button onClick={handleLogin}>Login</Button>
    )
}