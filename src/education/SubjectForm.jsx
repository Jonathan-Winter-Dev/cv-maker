export default function SubjectForm({
  subject,
  handleSubjectUpdate,
  handleSubjectDelete,
}) {
  return (
    <div className="subjectContainer">
      <form key={subject.id} action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Subject</label>
        <input
          onChange={handleSubjectUpdate}
          data-id={subject.id}
          data-parent-id={subject.parentId}
          type="text"
          name="subject"
          id="subject"
          value={subject.subject}
        />
        <label htmlFor="name">Grade</label>
        <input
          onChange={handleSubjectUpdate}
          data-parent-id={subject.parentId}
          data-id={subject.id}
          type="text"
          name="grade"
          id="grade"
          value={subject.grade}
        />
      </form>
      <button
        data-parent-id={subject.parentId}
        data-id={subject.id}
        onClick={handleSubjectDelete}
      >
        Delete Subject
      </button>
    </div>
  );
}
