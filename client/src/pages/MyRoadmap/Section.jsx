import React from "react";
import SubSection from "./SubSection";

const Section = ({ section, roadmapName, progress }) => {
  return (
    <div className="section">
      <div className="section-title">
        {section.id} {section.title}
      </div>
      <div>
        {section.subsections.map((subsection) => (
          <SubSection key={subsection._id} subsection={subsection} roadmapName={roadmapName} progress={progress} />
        ))}
      </div>
    </div>
  );
};

export default Section;
