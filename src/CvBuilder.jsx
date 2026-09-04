import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactCv from "./ContactCv";
import ProfileForm from "./ProfileForm.jsx";
import ProfileCv from "./ProfileCv.jsx";
import JobForm from "./employment/JobForm.jsx";
import JobCv from "./employment/JobCv.jsx";

export default function CvBuilder() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const [profile, setProfile] = useState("");
  const [jobs, setJobs] = useState([]);
  const [education, setEducation] = useState([]);

  function updateJobs(update) {
    setJobs(update);
  }

  function updateEducation(update) {
    setEducation(update);
  }

  function updateContact(contactData) {
    setContact(contactData);
  }

  function updateProfile(profileData) {
    setProfile(profileData);
  }

  return (
    <div className="cvBuilder">
      <div className="cvForms">
        <ContactForm updateContact={updateContact} />
        <ProfileForm updateProfile={updateProfile} />
        <JobForm updateJobs={updateJobs} jobs={[...jobs]} />
        <JobForm updateJobs={updateEducation} jobs={[...education]} />
      </div>

      <div className="cvPage">
        <ContactCv contact={contact} />
        <ProfileCv profile={profile} />
        <JobCv jobs={[...jobs]} />
        <JobCv jobs={[...education]} />
      </div>
    </div>
  );
}
