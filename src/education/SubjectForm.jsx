export default function SubjectForm({ subject, updateSubject, deleteSubject }) {
  function handleSubjectUpdate(e) {
    updateSubject(
      e.target.dataset.id,
      e.target.dataset.parentid,
      e.target.id,
      e.target.value,
    );
    console.log();
  }

  function handleSubjectDelete(e) {
    deleteSubject(e.target.dataset.id);
  }

  return (
    <div className="subjectContainer">
      <form key={subject.id} action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Subject</label>
        <input
          onChange={handleSubjectUpdate}
          data-id={subject.id}
          data-parentid={subject.parentId}
          type="text"
          name="subject"
          id="subject"
          value={subject.name}
        />
        <label htmlFor="name">Grade</label>
        <input
          onChange={handleSubjectUpdate}
          data-id={subject.id}
          type="text"
          name="grade"
          id="grade"
          value={subject.grade}
        />
      </form>
      <button onClick={handleSubjectDelete}>Delete Subject</button>
    </div>
  );
}
