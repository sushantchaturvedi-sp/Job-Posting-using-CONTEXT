import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }
        login(email);
        navigate("/");
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
