export default function JobCv({ jobs }) {
  const jobsDisplay = jobs.map((job) => {
    return (
      <div className="jobCvContainer" key={job.id}>
        <div className="jobDetailsContainer">
          <h2>{job.title}</h2>
          <h3>{job.employer}</h3>
          <h4>{job.location}</h4>
          <p>
            {job.startDate.toString()} - {job.endDate.toString()}
          </p>
        </div>
        <p>{job.description}</p>
      </div>
    );
  });

  return <div className="employmentContainer">{jobsDisplay}</div>;
}
