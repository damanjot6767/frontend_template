import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Logout } from "../pages/logout";
import { PrivateRoute } from "../pages/privateRoute";

export const Navigation = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<PrivateRoute><Logout/></PrivateRoute>}/>
          </Routes>
        </BrowserRouter>
    )
}