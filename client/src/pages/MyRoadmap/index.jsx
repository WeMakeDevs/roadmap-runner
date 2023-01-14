import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SidebarLayout from "../../components/SidebarLayout";
import Section from "./Section";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./index.css";

const Roadmap = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [roadmap, setRoadmap] = useState();

  useEffect(() => {
    async function fetchRoadmaps() {
      const res = await api.get(`roadmap/${id}`, {
        headers: { Authorization: user.accessToken },
      });
      setRoadmap(res.data.roadmap);
    }

    fetchRoadmaps();
  }, [id, user]);

  return (
    <SidebarLayout>
      <div className="roadmap-container">
        <div>
          <p style={{ color: "var(--clr-secondary)" }}>My Roadmap</p>
          <h1>{roadmap?.name}</h1>
          <p className="progress">50% completed</p>

          <div className="roadmap">
            {roadmap &&
              roadmap.sections &&
              roadmap.sections.map((section) => (
                <Section key={section._id} section={section} />
              ))}
          </div>
        </div>

        <div className="roadmap-info">
          <div>
            <img src={roadmap?.bannerImage} alt="" />
            <h2
              style={{
                color: "white",
                marginBottom: "1rem",
                fontSize: "1.5rem",
              }}
            >
              {roadmap?.name}
            </h2>
            <p className="description">{roadmap?.description}</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Roadmap;
