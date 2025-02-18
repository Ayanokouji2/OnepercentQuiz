    import React from "react";
    import useAuth from "../context/auth/index";
    import { Navigate, Outlet } from "react-router-dom";

    const ProtectedRoute = ({ authRequired }) => {
        const { isUser } = useAuth();

        if(!isUser && authRequired){
            return <Navigate to="/login" />
        }

        if(!authRequired && isUser){
            return <Navigate to="/getTopic" />
        }

        return <Outlet />
    };

    export default ProtectedRoute;
