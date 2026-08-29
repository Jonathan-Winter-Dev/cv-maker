export default function JobForm({ updateJob }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    const jobObject = {
      employer: dataObject.employer,
      startDate: dataObject.jobStartDate,
      endDate: dataObject.jobEndDate,
      description: dataObject.description,
    };

    updateJob(jobObject);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="employer">Employer</label>
      <input type="text" name="employer" id="employer" />
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
