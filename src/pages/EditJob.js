import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState({ title: "", description: "", company: "" });

    useEffect(() => {
        const jobs = JSON.parse(sessionStorage.getItem("jobs")) || [];
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
        let jobs = JSON.parse(sessionStorage.getItem("jobs")) || [];
        jobs = jobs.map((j) => (j.id === parseInt(id) ? job : j));
        sessionStorage.setItem("jobs", JSON.stringify(jobs));
        navigate("/");
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
