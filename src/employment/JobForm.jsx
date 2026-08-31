export default function JobForm({ updateJob, job }) {
  function handleChange(e) {
    updateJob(job.id, e.target.id, e.target.value);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} key={job.id}>
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
        name="title"
        id="title"
        value={job.title}
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        value={job.location}
        onChange={handleChange}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={job.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={job.endDate}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={job.description}
        onChange={handleChange}
      ></textarea>
    </form>
  );
}
