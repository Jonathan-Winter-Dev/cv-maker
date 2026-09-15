import Education from "./Education";
import SubjectForm from "./SubjectForm";
import Subject from "./Subject";

export default function EducationForm({
  updateEduction,
  schools,
  updateSubjects,
  subjects,
}) {
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
    const newSubject = new Subject(e.target.dataset.id);
    const newSubjectArr = [...subjects];
    newSubjectArr.push(newSubject);
    updateSubjects([...newSubjectArr]);

    updateEduction(
      schools.map((el) => {
        if (el.id === e.target.dataset.id) {
          const updatedArr = [...el.subjects];
          updatedArr.push(newSubject.id);
          return { ...el, subjects: [...updatedArr] };
        } else {
          return el;
        }
      }),
    );
  }

  function handleSubjectUpdate(e) {
    const newArr = subjects.map((item) => {
      if (item.id === e.target.dataset.id) {
        return { ...item, [e.target.id]: e.target.value };
      } else {
        return item;
      }
    });
    updateSubjects(newArr);
  }

  function handleSubjectDelete(e) {
    updateEduction(
      schools.map((school) => {
        if (school.id === e.target.dataset.parentId) {
          const updatedArr = school.subjects.filter(
            (subject) => subject.id !== e.target.dataset.id,
          );
          return { ...school, subjects: [...updatedArr] };
        } else {
          return school;
        }
      }),
    );

    updateSubjects(
      subjects.filter((subject) => subject.id !== e.target.dataset.id),
    );
  }

  const Forms = schools.map((school) => {
    const subjectForms = subjects.map((subject) => {
      if (subject.parentId === school.id) {
        return (
          <SubjectForm
            parentId={school.id}
            subject={subject}
            handleSubjectUpdate={handleSubjectUpdate}
            handleSubjectDelete={handleSubjectDelete}
          />
        );
      }
    });

    return (
      <div className="educationFormContainer">
        <form action="" onSubmit={(e) => e.preventDefault()} key={school.id}>
          <fieldset>
            <div className="fieldContainer">
              <label htmlFor="school">School</label>
              <input
                data-id={school.id}
                type="text"
                name="school"
                id="school"
                value={school.school}
                onChange={handleChange}
              />
            </div>
            <div className="fieldContainer">
              <label htmlFor="location">Location</label>
              <input
                data-id={school.id}
                type="text"
                name="location"
                id="location"
                value={school.location}
                onChange={handleChange}
              />
            </div>
            <div className="fieldContainer">
              <label htmlFor="startDate">Start Date</label>
              <input
                data-id={school.id}
                type="date"
                name="startDate"
                id="startDate"
                value={school.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="fieldContainer">
              <label htmlFor="endDate">End Date</label>
              <input
                data-id={school.id}
                type="date"
                name="endDate"
                id="endDate"
                value={school.endDate}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <button data-id={school.id} onClick={handleDelete}>
            Delete
          </button>
        </form>
        {subjectForms}
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
