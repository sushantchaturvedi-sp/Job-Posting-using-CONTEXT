import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]);

    function addJob(newJob) {
        setJobs([...jobs, { id: Date.now().toString(), ...newJob }]);
    }

    function editJob(updatedJob) {
        setJobs(jobs.map(job => (job.id === updatedJob.id ? updatedJob : job)));
    }

    function deleteJob(id) {
        setJobs(jobs.filter(job => job.id !== id));
    }

    function getJobById(id) {
        return jobs.find(job => job.id === id);
    }

    return (
        <JobContext.Provider value={{ jobs, addJob, editJob, deleteJob, getJobById }}>
            {children}
        </JobContext.Provider>
    );
}

export function useJobContext() {
    return useContext(JobContext);
}
