import React from "react";
import Resource from "./Resource";

const SubSection = ({ subsection, roadmapName }) => {
  return (
    <div className="subsection">
      {subsection.title !== "" && (
        <div className="subsection-title">
          {" "}
          {subsection.id} {subsection.title}
        </div>
      )}
      <div>
        {subsection.resources.map((resource) => (
          <Resource key={resource._id} resource={resource} roadmapName={roadmapName} />
        ))}
      </div>
    </div>
  );
};

export default SubSection;
