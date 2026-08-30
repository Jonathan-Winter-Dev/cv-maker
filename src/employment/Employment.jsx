import { useState } from "react";
import Job from "./Job";
import JobForm from "./JobForm";

export default function Employment() {
  const [jobs, setJobs] = useState([]);
  const jobsArr = [...jobs];

  const jobDisplay = jobsArr.map((item) => {
    return (
      <div className="jobContainer" key={item.id}>
        <JobForm updateJob={updateJob} job={item} />
        <p>{item.employer}</p>
        <p>{item.title}</p>
      </div>
    );
  });

  function addJob() {
    const jobArr = [...jobs];
    jobArr.push(new Job());
    setJobs(jobArr);
  }

  function updateJob(id, key, value) {
    const newArr = jobs.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }
    });
    setJobs(newArr);
  }

  return (
    <>
      <p>Hello</p>
      <button onClick={addJob}>Add Job</button>
      <div className="employmentHistory">{jobDisplay}</div>
    </>
  );
}
