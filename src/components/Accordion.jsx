export default function Accordion({ updateActive, isActive, title, content }) {
  function handleUpdateActive() {
    updateActive(!isActive);
  }
  return (
    <div className="accordion">
      <div className="accordionTitle" onClick={handleUpdateActive}>
        <h1>{title}</h1>
        <div>{isActive ? "yes" : "no"}</div>
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  );
}
