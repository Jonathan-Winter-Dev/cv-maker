import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  function handleUpdateActive(e) {
    setIsActive(!isActive);
    const parent = e.target.parentElement;
    parent.classList.toggle("accordionVisible");

    parent.querySelector(".accordionContent").classList.toggle("visible");
    parent.querySelector(".accordionTitle").classList.toggle("visible");
  }
  return (
    <div className={`accordion ${isActive ? "accordionVisible" : ""}`}>
      <div className="accordionTitle" onClick={handleUpdateActive}>
        <h1>{title}</h1>
        <div className="accordionVisibilitySymbol">
          <svg
            className={`verticalBar ${isActive ? "accordionVisible" : ""}`}
            xmlns="http://w3.org"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <rect
              x="11"
              y="2"
              width="2"
              height="20"
              rx="1"
              ry="1"
              fill="currentColor"
            />
          </svg>
          <svg
            className={`horizontalBar ${isActive ? "accordionVisible" : ""}`}
            xmlns="http://w3.org"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <rect
              x="11"
              y="2"
              width="2"
              height="20"
              rx="1"
              ry="1"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="accordionContent">{content}</div>
    </div>
  );
}
