import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulating persistent authentication state
        const storedUser = JSON.parse(sessionStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (email) => {
        let role = email === "admin@example.com" ? "admin" : "user";
        const userData = { email, role };
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
