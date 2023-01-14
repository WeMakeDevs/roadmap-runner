import React, { useState } from "react";

const Resource = ({ resource, completed = false }) => {
  const [checked, setChecked] = useState(completed);

  function toggleCompleted() {
    setChecked((prev) => !prev);
  }

  return (
    <div
      className="resource card"
      style={{ cursor: "pointer" }}
      onClick={toggleCompleted}
    >
      <div>
        <label class="checkbox-container tooltip">
          <input type="checkbox" class="form-control" checked={checked} onChange={toggleCompleted} />
          <span class="checkbox-custom"></span>
          {!checked && <span class="tooltiptext">Mark as done</span>}
        </label>
        {resource.id} {resource.title}
      </div>
      <a href={resource.url} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  );
};

export default Resource;
