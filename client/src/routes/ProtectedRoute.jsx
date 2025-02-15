    import React from "react";
    import useAuth from "../context/auth/index";
    import { Navigate, Outlet, useLocation } from "react-router-dom";

    const ProtectedRoute = ({ authRequired }) => {
        const { isUser } = useAuth();
        const location = useLocation();

        if(authRequired && isUser){
            return <Outlet />;
        }

        if(isUser !== null && (location.pathname == "/signup" || location.pathname == "/login") )
            return <Navigate to="/getTopic" />

        return <Navigate to="/login" />
    };

    export default ProtectedRoute;
