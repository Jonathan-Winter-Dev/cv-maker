export default function SubjectsCv({ subjects }) {
  const subjectsDisplay = subjects.map((el) => {
    return (
      <li key={el.id}>
        <b>{el.subject}:</b> {el.grade}
      </li>
    );
  });

  return <ul className="subjects">{subjectsDisplay}</ul>;
}
