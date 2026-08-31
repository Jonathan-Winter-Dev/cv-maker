import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactCv from "./ContactCv";
import ProfileForm from "./ProfileForm.jsx";
import ProfileCv from "./ProfileCv.jsx";
import JobForm from "./employment/JobForm.jsx";
import Job from "./employment/Job.jsx";
import JobCv from "./employment/JobCv.jsx";

export default function CvBuilder() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const [jobs, setJobs] = useState([]);

  const jobForms = jobs.map((item) => {
    return (
      <div className="jobFormContainer" key={item.id}>
        <JobForm updateJob={updateJob} deleteJob={deleteJob} job={item} />
      </div>
    );
  });

  const jobCv = jobs.map((item) => <JobCv key={item.id} job={item} />);

  function deleteJob(id) {
    setJobs(jobs.filter((item) => item.id !== id));
  }

  function addJob() {
    const jobsArr = [...jobs];
    jobsArr.push(new Job());
    setJobs(jobsArr);
  }

  const [profile, setProfile] = useState("");

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

  function updateContact(contactData) {
    setContact(contactData);
  }

  function updateProfile(profileData) {
    setProfile(profileData);
  }

  return (
    <>
      <div className="cvForms">
        <ContactForm updateContact={updateContact} />
        <ProfileForm updateProfile={updateProfile} />
        <button onClick={addJob}>Add Job</button>
        <>{jobForms}</>
      </div>

      <div className="cvPage">
        <ContactCv contact={contact} />
        <ProfileCv profile={profile} />
        <>{jobCv}</>
      </div>
    </>
  );
}
