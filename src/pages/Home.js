import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useJobs } from "../context/jobContext";

function Home() {
    const { user } = useAuthContext();
    const { jobs, addJob, editJob, deleteJob } = useJobs();
    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this job?")) return;
        deleteJob(id);
    };

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <li key={job.id}>
                            <Link to={`/jobs/${job.id}`}>{job.title} at {job.company}</Link>
                            {user?.role === "admin" && (
                                <>
                                    <Link to={`/edit-job/${job.id}`}><button>Edit</button></Link>
                                    <button onClick={() => handleDelete(job.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))
                ) : (
                    <p>No jobs available.</p>
                )}
            </ul>
        </div>
    );
}

export default Home;
