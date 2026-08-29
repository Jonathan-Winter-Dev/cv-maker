import Job from "./Job";

export default function JobForm({ updateJob, job }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    const newJob = { ...job };

    newJob.employer = dataObject.employer;

    updateJob(newJob);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="employer">Employer</label>
      <input type="text" name="employer" id="employer" />
      <label htmlFor="jobTitle">Title</label>
      <input type="text" name="jobTitle" id="jobTitle" />
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
