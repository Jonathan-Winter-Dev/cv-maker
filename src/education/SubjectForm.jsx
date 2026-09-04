export default function SubjectForm({ subject, updateSubject, deleteSubject }) {
  function handleSubjectUpdate(e) {
    updateSubject(e.target.dataset.id, e.target.id, e.target.value);
  }

  function handleSubjectDelete(e) {
    deleteSubject(e);
  }

  return (
    <div className="subjectContainer">
      <form key={subject.id} action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Subject</label>
        <input
          onChange={handleSubjectUpdate}
          data-id={subject.id}
          type="text"
          name="subject"
          id="subject"
          value={subject.name}
        />
        <label htmlFor="name">Name</label>
        <input
          onChange={handleSubjectUpdate}
          data-id={subject.id}
          type="text"
          name="grade"
          id="grade"
          value={subject.name}
        />
      </form>
      <button onClick={handleSubjectDelete}>Delete Subject</button>
    </div>
  );
}
