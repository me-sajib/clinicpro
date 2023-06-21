import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticate = JSON.parse(localStorage.getItem("a_h_s"));
    if (isAuthenticate === false) {
        return <Navigate to="/" state={{ from: location }} replace={true} />;
    }
    return children;
};

export default PrivateRoute;