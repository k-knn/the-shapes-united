import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/auth-context";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
