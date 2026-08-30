export default function JobForm({ updateJob, job }) {
  function handleChange(e) {
    console.log(e);
    updateJob(job.id, e.target.id, e.target.value);
  }

  function handleEmployerChange(e) {
    const newJob = { ...job, employer: e.target.value };
    updateJob(newJob);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="employer">Employer</label>
      <input
        type="text"
        name="employer"
        id="employer"
        value={job.employer}
        onChange={handleChange}
      />
      <label htmlFor="jobTitle">Title</label>
      <input
        type="text"
        name="jobTitle"
        id="jobTitle"
        value={job.title}
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input type="text" name="jobLocation" id="jobLocation" />
      <label htmlFor="jobStartDate">Start Date</label>
      <input type="date" name="jobStartDate" />
      <label htmlFor="jobEndDate">End Date</label>
      <input type="date" name="jobEndDate" />
      <label htmlFor="jobDescription">Description</label>
      <textarea name="jobDescription" id="jobDescription"></textarea>
      <input type="submit" />
    </form>
  );
}
