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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 28"
            width="24"
            height="24"
          >
            <rect
              x="10.5"
              y="2.5"
              width="3"
              height="23"
              rx="1.5"
              fill="currentColor"
            />
          </svg>

          <svg
            className={`horizontalBar ${isActive ? "accordionVisible" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 28"
            width="24"
            height="24"
          >
            <rect
              x="10.5"
              y="2.5"
              width="3"
              height="23"
              rx="1.5"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="accordionContent">{content}</div>
    </div>
  );
}
