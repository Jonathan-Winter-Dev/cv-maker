export default function TestForm({ updateTest, testObjects }) {
  function handleChange(e) {
    const newArr = testObjects.map((item) => {
      if (item.id === e.target.dataset.id) {
        return { ...item, [e.target.id]: e.target.value };
      } else {
        return item;
      }
    });
    updateTest(newArr);

    // const newArr = testObjects.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, [key]: value };
    //   } else {
    //     return item;
    //   }
    // });
    // updateTest(newArr);
  }

  function handleDelete(e) {
    console.log(e.target.dataset.id);
    updateTest(testObjects.filter((item) => item.id !== e.target.dataset.id));
  }

  const Forms = testObjects.map((job) => {
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
          dataset-id={job.id}
          type="text"
          name="title"
          id="title"
          value={job.title}
          onChange={handleChange}
        />
        <label htmlFor="location">Location</label>
        <input
          dataset-id={job.id}
          type="text"
          name="location"
          id="location"
          value={job.location}
          onChange={handleChange}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          dataset-id={job.id}
          type="date"
          name="startDate"
          id="startDate"
          value={job.startDate}
          onChange={handleChange}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          dataset-id={job.id}
          type="date"
          name="endDate"
          id="endDate"
          value={job.endDate}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          dataset-id={job.id}
          name="description"
          id="description"
          value={job.description}
          onChange={handleChange}
        ></textarea>
        <button dataset-id={job.id} onClick={handleDelete}>
          Delete Job
        </button>
      </form>
    );
  });

  return <>{Forms}</>;
}
