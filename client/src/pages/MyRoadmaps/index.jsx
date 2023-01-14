import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Card from "./Card";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./index.css";

const Roadmaps = () => {
  const { user } = useAuthContext();
  const [roadmaps, setRoadmaps] = useState();

  useEffect(() => {
    async function fetchRoadmaps() {
      const res = await api.get("roadmapsByUserId", {
        headers: { Authorization: user.accessToken },
      });
      setRoadmaps(res.data.roadmaps);
    }

    fetchRoadmaps();
  }, [user]);

  return (
    <SidebarLayout>
      <h1>My Roadmaps</h1>
      <div className="roadmaps-container">
        <div className="roadmaps-grid">
          {roadmaps &&
            roadmaps.map((roadmap) => (
              <Card
                key={roadmap._id}
                bannerImage={roadmap.bannerImage}
                title={roadmap.name}
                id={roadmap._id}
                tagline={roadmap.tagline}
              />
            ))}
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Roadmaps;
