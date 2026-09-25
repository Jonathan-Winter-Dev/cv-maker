import SubjectsCv from "./SubjectCv";
import { inputDateToString } from "../utils";

export default function EducationCv({ education, subjects }) {
  const educationDisplay = education.map((el) => {
    const subjectsForDisplay = subjects.filter(
      (subject) => subject.parentId === el.id,
    );
    return (
      <div className="educationCvContainer" key={el.id}>
        <div className="educationDetailsContainer">
          <h2>{el.school}</h2>
          <h3>{el.location}</h3>
          <p>
            {inputDateToString(el.startDate)} - {inputDateToString(el.endDate)}
          </p>
        </div>
        <div className="subjectsContainer">
          <SubjectsCv subjects={[...subjectsForDisplay]} />
        </div>
      </div>
    );
  });

  return (
    <div className="educationContainer">
      <h2 className="sectionTitle">Education</h2>
      {educationDisplay}
    </div>
  );
}
