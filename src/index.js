import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import "./index.css";
import { JobProvider } from "./context/jobContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <JobProvider>
                <App />
            </JobProvider>
        </AuthProvider>
    </React.StrictMode>
);
