import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

function Navbar() {
    const { user, logout } = useAuthContext();

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            {user && user.role === "admin" && <Link to="/create-job">Create Job</Link>}
            {user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
}

export default Navbar;
