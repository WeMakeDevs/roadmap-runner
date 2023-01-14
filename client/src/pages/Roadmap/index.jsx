import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SidebarLayout from "../../components/SidebarLayout";
import Section from "./Section";
import { useAuthContext } from "../../hooks/useAuthContext";
import api from "../../api";
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
  }, [user, id]);

  return (
    <SidebarLayout>
      <div className="roadmap-container">
        <div>
          <h1>{roadmap?.name}</h1>
          <button className="roadmap-enroll-btn">Enroll</button>

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
