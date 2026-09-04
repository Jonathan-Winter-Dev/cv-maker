export default function SubjectForm({ subject, handleUpdate }) {
  return (
    <form key={subject.id} action="" onSubmit={(e) => e.preventDefault()}>
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
