import Job from "./Job";
import JobForm from "./JobForm";

export default function Employment(jobs, updateJobs) {
  console.log(jobs);
  const jobsArr = [...jobs];
  const jobDisplay = jobsArr.map((item) => {
    return (
      <div className="jobContainer" key={item.id}>
        <JobForm updateJob={updateJob} job={item} deleteJob={deleteJob} />
        <p>{item.employer}</p>
        <p>{item.title}</p>
      </div>
    );
  });

  function deleteJob(id) {
    updateJobs(jobsArr.filter((job) => job.id !== id));
  }

  function addJob() {
    jobsArr.push(new Job());
    updateJobs(jobsArr);
  }

  function updateJob(id, key, value) {
    const newArr = jobs.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      } else {
        return item;
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
