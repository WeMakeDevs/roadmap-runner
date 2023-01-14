import React from "react";
import Resource from "./Resource";

const SubSection = ({ subsection }) => {
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
          <Resource resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default SubSection;
