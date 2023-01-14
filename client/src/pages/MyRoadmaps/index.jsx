import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import roadmapsData from "../../data/roadmaps.json";
import Card from "./Card";
import "./index.css";

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] = useState();

  useEffect(() => {
    async function fetchRoadmaps() {
      setRoadmaps(roadmapsData.data.roadmaps);
    }

    fetchRoadmaps();
  }, []);

  return (
    <SidebarLayout>
      <h1>My Roadmaps</h1>
      <div className="roadmaps-container">
        <div className="roadmaps-grid">
          {roadmaps &&
            roadmaps.map((roadmap) => (
              <Card
                bannerImage={roadmap.bannerImage}
                title={roadmap.name}
                id={roadmap.id}
                tagline={roadmap.tagline}
              />
            ))}
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Roadmaps;
