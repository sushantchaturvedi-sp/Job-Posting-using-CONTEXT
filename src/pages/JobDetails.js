import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/jobContext";


function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const { jobs } = useJobs();

    useEffect(() => {
        const foundJob = jobs.find((j) => j.id === parseInt(id));
        if (foundJob) {
            setJob(foundJob);
        } else {
            alert("Job not found!");
            navigate("/");
        }
    }, [id, navigate]);

    if (!job) return <p>Loading...</p>;

    return (
        <div>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>{job.description}</p>
        </div>
    );
}

export default JobDetails;
