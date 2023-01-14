import React from "react";

const Resource = ({ resource }) => {
  return (
    <a href={resource.url} target="_blank" rel="noreferrer">
    <div className="resource card">
      <div>
        {resource.id} {resource.title}
      </div>
      <div>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    </div>
    </a>
  );
};

export default Resource;
