import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SidebarLayout from "../../components/SidebarLayout";
// import roadmapData from "../../data/android.json";
import roadmapData from "../../data/frontend.json";
import Section from "./Section";
import "./index.css";

const Roadmap = () => {
  const { id } = useParams();

  const [roadmap, setRoadmap] = useState();

  useEffect(() => {
    async function fetchRoadmaps() {
      setRoadmap(roadmapData);
    }

    fetchRoadmaps();
  }, []);

  return (
    <SidebarLayout>
      <h1>
        {roadmap?.name} {id}
      </h1>
      <div className="roadmap">
        {roadmap &&
          roadmap.sections &&
          roadmap.sections.map((section) => <Section section={section} />)}
      </div>
    </SidebarLayout>
  );
};

export default Roadmap;
