import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  function handleUpdateActive() {
    setIsActive(!isActive);
  }
  return (
    <div className="accordion">
      <div className="accordionTitle" onClick={handleUpdateActive}>
        <h1>{title}</h1>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  );
}
