import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
    return (

        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route
                        path="/create-job"
                        element={
                            <ProtectedRoute role="admin">
                                <CreateJob />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/edit-job/:id"
                        element={
                            <ProtectedRoute role="admin">
                                <EditJob />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
