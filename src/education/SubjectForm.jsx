import Education from "./Education";

export default function SubjectForm({ subject, handleUpdate }) {
  function handleSubjectUpdate(e) {}

  return (
    <form action="" key={subject.id} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Name</label>
      <input
        onChange={handleUpdate}
        data-id={subject.id}
        type="text"
        name="name"
        id="name"
        value={subject.name}
      />
    </form>
  );
}
