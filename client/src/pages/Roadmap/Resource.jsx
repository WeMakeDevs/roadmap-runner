import React from "react";

const Resource = ({ resource }) => {
  return (
    <div className="resource card">
      <div> {resource.id} {resource.title}</div>
    </div>
  );
};

export default Resource;
