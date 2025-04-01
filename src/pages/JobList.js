import { useContext } from "react";
import { useJobs } from "../context/jobContext";
import { Link } from "react-router-dom";

function JobList() {
    const { jobs, deleteJob } = useJobs();

    return (
        <div>
            <h2>Job Listings</h2>
            {jobs.length === 0 ? (
                <p>No jobs available.</p>
            ) : (
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.title}</strong> at {job.company}
                            <button onClick={() => deleteJob(job.id)}>Delete</button>
                            <Link to={`/edit-job/${job.id}`}>
                                <button>Edit</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/add-job">
                <button>Add Job</button>
            </Link>
        </div>
    );
}

export default JobList;
