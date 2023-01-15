import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Card from "./Card";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./index.css";
import Loader from "../../components/Loader";

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    async function fetchRoadmaps() {
      setLoading(true);
      const res = await api.get("roadmap", {
        headers: { Authorization: user.accessToken },
      });
      setLoading(false);
      setRoadmaps(res.data.roadmaps);
    }

    fetchRoadmaps();
  }, [user]);

  if(loading) {
    return <SidebarLayout><Loader /></SidebarLayout>
  }

  return (
    <SidebarLayout>
      <h1>Roadmaps</h1>
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
