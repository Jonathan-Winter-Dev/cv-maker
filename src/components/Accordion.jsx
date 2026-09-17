import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  function handleUpdateActive(e) {
    setIsActive(!isActive);
    const parent = e.target.parentElement;
    parent.classList.toggle("accordionVisible");

    parent.querySelector(".accordionContent").classList.toggle("visible");
  }
  return (
    <div className={`accordion ${isActive ? "accordionVisible" : ""}`}>
      <div className="accordionTitle" onClick={handleUpdateActive}>
        <h1>{title}</h1>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {/* {isActive && <div className="accordionContent">{content}</div>} */}
      <div className="accordionContent">{content}</div>
    </div>
  );
}
