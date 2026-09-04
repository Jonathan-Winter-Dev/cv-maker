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

  // const educationForms = education.map((item) => {
  //   return (
  //     <div className="jobFormContainer" key={item.id}>
  //       <JobForm
  //         updateJob={updateEducation}
  //         deleteJob={deleteEducation}
  //         job={item}
  //       />
  //     </div>
  //   );
  // });

  // const educationCv = education.map((item) => (
  //   <JobCv key={item.id} job={item} />
  // ));

  // function deleteEducation(id) {
  //   setEducation(education.filter((item) => item.id !== id));
  // }

  // function addEducation() {
  //   const educationArr = [...education];
  //   educationArr.push(new Job());
  //   setEducation(educationArr);
  // }

  // function updateEducation(id, key, value) {
  //   const newArr = education.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, [key]: value };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setEducation(newArr);
  // }

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
        {/* <div className="educationForms">
          <button onClick={addEducation}>Add Education</button>
          <>{educationForms}</>
        </div> */}
      </div>

      <div className="cvPage">
        <ContactCv contact={contact} />
        <ProfileCv profile={profile} />
        <JobCv jobs={[...jobs]} />
        {/* <div className="educationContainer">
          <h2>Education </h2>
          <>{educationCv}</>
        </div>  */}
      </div>
    </div>
  );
}
