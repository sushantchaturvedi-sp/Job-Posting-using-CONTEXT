import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJobs } from "../context/jobContext";

function EditJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState({ title: "", description: "", company: "" });
    const { jobs, editJob } = useJobs();

    useEffect(() => {
        const foundJob = jobs.find((j) => j.id === parseInt(id));
        if (foundJob) {
            setJob(foundJob);
        } else {
            alert("Job not found!");
            navigate("/");
        }
    }, [id, navigate]);

    const handleEditJob = (e) => {
        e.preventDefault();
        editJob(id, job);
        navigate("/");
        console.log(jobs);
    };

    return (
        <div>
            <h2>Edit Job</h2>
            <form onSubmit={handleEditJob}>
                <input type="text" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} required />
                <input type="text" value={job.company} onChange={(e) => setJob({ ...job, company: e.target.value })} required />
                <textarea value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} required />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditJob;
