import Education from "./Education";
import SubjectForm from "./SubjectForm";
import Subject from "./Subject";

export default function EducationForm({ updateEduction, schools }) {
  function handleChange(e) {
    const newArr = schools.map((item) => {
      if (item.id === e.target.dataset.id) {
        return { ...item, [e.target.id]: e.target.value };
      } else {
        return item;
      }
    });
    updateEduction(newArr);
  }

  function handleDelete(e) {
    updateEduction(schools.filter((item) => item.id !== e.target.dataset.id));
  }

  function handleAddSchool() {
    const newArr = [...schools];
    newArr.push(new Education());
    updateEduction(newArr);
  }

  function handleAddSubject(e) {
    const newArr = schools.map((item) => {
      if (item.id === e.target.dataset.id) {
        const newSubjectsArr = [...item.subjects];
        newSubjectsArr.push(new Subject());
        return { ...item, subjects: newSubjectsArr };
      } else {
        return item;
      }
    });
    updateEduction(newArr);
  }

  const Forms = schools.map((school) => {
    const subjects = school.subjects.map((subject) => {
      return <SubjectForm subject={subject} />;
    });

    return (
      <div className="educationFormContainer">
        <form action="" onSubmit={(e) => e.preventDefault()} key={school.id}>
          <label htmlFor="school">School</label>
          <input
            data-id={school.id}
            type="text"
            name="school"
            id="school"
            value={school.school}
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <input
            data-id={school.id}
            type="text"
            name="location"
            id="location"
            value={school.location}
            onChange={handleChange}
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            data-id={school.id}
            type="date"
            name="startDate"
            id="startDate"
            value={school.startDate}
            onChange={handleChange}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            data-id={school.id}
            type="date"
            name="endDate"
            id="endDate"
            value={school.endDate}
            onChange={handleChange}
          />
          <button data-id={school.id} onClick={handleDelete}>
            Delete
          </button>
        </form>
        <>{subjects}</>
        <button data-id={school.id} onClick={handleAddSubject}>
          Add Subject
        </button>
      </div>
    );
  });

  return (
    <div className="educationFormsContainer">
      {Forms}
      <button onClick={handleAddSchool}>Add Education</button>
    </div>
  );
}
