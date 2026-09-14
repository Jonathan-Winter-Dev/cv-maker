export default function SubjectsCv({ parentId, subjects }) {
  const subjectsDisplay = subjects.map((el) => {
    return (
      <li key={el.id}>
        {el.subject} - {el.grade}
      </li>
    );
  });

  return <ul className="subjects">{subjectsDisplay}</ul>;
}
