import React from "react";
import SubSection from "./SubSection";

const Section = ({ section }) => {
  return (
    <div className="section">
      <div className="section-title">
        {section.id} {section.title}
      </div>
      <div>
        {section.subsections.map((subsection) => (
          <SubSection key={subsection._id} subsection={subsection} />
        ))}
      </div>
    </div>
  );
};

export default Section;
