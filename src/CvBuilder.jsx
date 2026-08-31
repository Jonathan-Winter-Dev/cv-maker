import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactCv from "./ContactCv";
import ProfileForm from "./ProfileForm.jsx";
import ProfileCv from "./ProfileCv.jsx";
import Employment from "./employment/Employment.jsx";

export default function CvBuilder() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const [jobs, setJobs] = useState([]);

  const [profile, setProfile] = useState("");

  function updateJobs(jobsData) {
    setJobs(jobsData);
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
        <Employment jobs={jobs} updateJobs={updateJobs} />
      </div>

      <div className="cvPage">
        <ContactCv contact={contact} />
        <ProfileCv profile={profile} />
      </div>
    </>
  );
}
