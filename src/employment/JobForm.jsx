import Job from "./Job";

export default function JobForm({ updateJobs, jobs }) {
  function handleChange(e) {
    const newArr = jobs.map((item) => {
      if (item.id === e.target.dataset.id) {
        return { ...item, [e.target.id]: e.target.value };
      } else {
        return item;
      }
    });
    updateJobs(newArr);
  }

  function handleDelete(e) {
    updateJobs(jobs.filter((item) => item.id !== e.target.dataset.id));
  }

  function handleAddJob() {
    const newArr = [...jobs];
    newArr.push(new Job());
    updateJobs(newArr);
  }

  const Forms = jobs.map((job) => {
    return (
      <form onSubmit={(e) => e.preventDefault()} key={job.id}>
        <label htmlFor="employer">Employer</label>
        <input
          data-id={job.id}
          type="text"
          name="employer"
          id="employer"
          value={job.employer}
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">Title</label>
        <input
          data-id={job.id}
          type="text"
          name="title"
          id="title"
          value={job.title}
          onChange={handleChange}
        />
        <label htmlFor="location">Location</label>
        <input
          data-id={job.id}
          type="text"
          name="location"
          id="location"
          value={job.location}
          onChange={handleChange}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          data-id={job.id}
          type="date"
          name="startDate"
          id="startDate"
          value={job.startDate}
          onChange={handleChange}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          data-id={job.id}
          type="date"
          name="endDate"
          id="endDate"
          value={job.endDate}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          data-id={job.id}
          name="description"
          id="description"
          value={job.description}
          onChange={handleChange}
        ></textarea>
        <button data-id={job.id} onClick={handleDelete}>
          Delete Job
        </button>
      </form>
    );
  });

  return (
    <div className="employmentFormsContainer">
      {Forms}
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
}
