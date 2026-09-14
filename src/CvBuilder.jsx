import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactCv from "./ContactCv";
import ProfileForm from "./ProfileForm.jsx";
import ProfileCv from "./ProfileCv.jsx";
import JobForm from "./employment/JobForm.jsx";
import JobCv from "./employment/JobCv.jsx";
import EducationForm from "./education/EducationForm.jsx";
import EducationCv from "./education/EducationCv.jsx";

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
  const [subjects, setSubjects] = useState([]);

  function updateJobs(update) {
    setJobs(update);
  }

  function updateEducation(update) {
    setEducation(update);
    console.log(education);
  }

  function updateContact(contactData) {
    setContact(contactData);
  }

  function updateProfile(profileData) {
    setProfile(profileData);
  }

  function updateSubjects(subjectsData) {
    setSubjects(subjectsData);
    console.log(subjects);
  }

  return (
    <div className="cvBuilder">
      <div className="cvForms">
        <ContactForm updateContact={updateContact} />
        <ProfileForm updateProfile={updateProfile} />
        <JobForm updateJobs={updateJobs} jobs={[...jobs]} />
        <EducationForm
          updateEduction={updateEducation}
          schools={[...education]}
          updateSubjects={updateSubjects}
          subjects={[...subjects]}
        />
      </div>

      <div className="cvPage">
        <ContactCv contact={contact} />
        <ProfileCv profile={profile} />
        <JobCv jobs={[...jobs]} />
        <EducationCv education={[...education]} subjects={[...subjects]} />
      </div>
    </div>
  );
}
