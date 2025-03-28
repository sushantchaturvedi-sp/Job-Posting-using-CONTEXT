import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

function ProtectedRoute({ role, children }) {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (role && user.role !== role) {
        alert("You do not have permission to access this page.");
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
