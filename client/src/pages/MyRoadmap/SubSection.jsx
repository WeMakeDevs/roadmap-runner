import React from "react";
import Resource from "./Resource";

const SubSection = ({ subsection, roadmapName, progress }) => {
  return (
    <div className="subsection">
      {subsection.title !== "" && (
        <div className="subsection-title">
          {" "}
          {subsection.id} {subsection.title}
        </div>
      )}
      <div>
        {subsection.resources.map((resource) => {
          const completed = progress.filter(prog => prog.id === resource._id).length > 0;
          return <Resource key={resource._id} resource={resource} roadmapName={roadmapName} completed={completed} />
        })}
      </div>
    </div>
  );
};

export default SubSection;
