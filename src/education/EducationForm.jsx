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
        newSubjectsArr.push(new Subject(item.id));
        return { ...item, subjects: newSubjectsArr };
      } else {
        return item;
      }
    });
    updateEduction(newArr);
  }

  // ********** TODO ******************
  // the below does not work because i am passing in subject id rather than school id. for this update
  // to work i need to add school id? feels messy, with nested loops.
  function updateSubject(subjectId, key, value, parentId) {
    updateEduction(
      schools.map((item) => {
        if (item.id === parentId) {
          return item.subjects.map((subject) => {
            if (subject.id === subjectId) {
              return { ...subject, [key]: value };
            } else {
              return subject;
            }
          });
        } else {
          return item;
        }
      }),
    );
    console.log(schools);
  }

  // function updateSubject(subjectId, key, value, parentId {
  //   const newSchools = schools.map(school => {
  //     if (school.id === parentId) {
  //       school.subjects.map(subject => {
  //         if (subject.id === subjectId) {
  //           return {...subject, [key]: value}
  //         } else {
  //           return subject
  //         }
  //       })
  //     } else {
  //       return school
  //     }
  //   })

  // })

  // function deleteSubject(id) {
  //   updateEduction(
  //     schools.map(item => {
  //       if(item.id == id) {
  //         const newSubjectsArr =

  //       }
  //     })
  //   )
  // }

  const Forms = schools.map((school) => {
    const subjects = school.subjects.map((subject) => {
      return (
        <SubjectForm
          parentId={school.id}
          subject={subject}
          updateSubject={updateSubject}
        />
      );
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
