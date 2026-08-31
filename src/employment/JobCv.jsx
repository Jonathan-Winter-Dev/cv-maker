export default function JobCv({ job }) {
  return (
    <div className="jobCvContainer">
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
}
