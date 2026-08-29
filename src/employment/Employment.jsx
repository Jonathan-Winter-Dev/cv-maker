import { useState } from "react";
import Job from "./Job";
import JobForm from "./JobForm";

export default function Employment() {
  const [jobs, setJobs] = useState([]);

  function addJob() {
    const jobArr = jobs;
    jobArr.push(new Job());

    setJobs(jobArr);
  }

  function updateJob(jobData) {
    console.log(jobData);
  }

  return (
    <>
      <p>Hello</p>
      <button onClick={addJob}>Add Job</button>
    </>
  );
}
