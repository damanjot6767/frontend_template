import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LogoutUser } from "../Actions/auth";
import { Button } from "../components/ui/button";


export const Logout = () => {
    const { isLogedIn } = useSelector((state)=>state.users)
    const dispatch = useDispatch()

    const handleLogOut = ()=>{
        dispatch(LogoutUser())
    }

    return (
        <Button onClick={handleLogOut}>Logout</Button>
    )
}