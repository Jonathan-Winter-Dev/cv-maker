import Job from "./Job";
import Accordion from "../components/Accordion";

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
      <Accordion
        title={job.title.length ? job.title : "New Job"}
        content={
          <form onSubmit={(e) => e.preventDefault()} key={job.id}>
            <fieldset>
              <div className="fieldContainer">
                <label htmlFor="employer">Employer</label>
                <input
                  data-id={job.id}
                  type="text"
                  name="employer"
                  id="employer"
                  value={job.employer}
                  onChange={handleChange}
                />
              </div>
              <div className="fieldContainer">
                <label htmlFor="jobTitle">Title</label>
                <input
                  data-id={job.id}
                  type="text"
                  name="title"
                  id="title"
                  value={job.title}
                  onChange={handleChange}
                />
              </div>
              <div className="fieldContainer">
                <label htmlFor="location">Location</label>
                <input
                  data-id={job.id}
                  type="text"
                  name="location"
                  id="location"
                  value={job.location}
                  onChange={handleChange}
                />
              </div>
              <div className="fieldContainer">
                <label htmlFor="startDate">Start Date</label>
                <input
                  data-id={job.id}
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={job.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="fieldContainer">
                <label htmlFor="endDate">End Date</label>
                <input
                  data-id={job.id}
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={job.endDate}
                  onChange={handleChange}
                />
              </div>
              <div className="fieldContainer textArea">
                <label htmlFor="description">Description</label>
                <textarea
                  data-id={job.id}
                  name="description"
                  id="description"
                  value={job.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </fieldset>
            <div className="formButtonsContainer">
              {" "}
              <button
                data-id={job.id}
                onClick={handleDelete}
                className="deleteButton"
              >
                Delete Job
              </button>
            </div>
          </form>
        }
      />
    );
  });

  return (
    <>
      <div className="addButtonContainer">
        <button onClick={handleAddJob}>Add Job</button>
      </div>
      {Forms}
    </>
  );
}
