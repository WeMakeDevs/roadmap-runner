import React, { useState, useEffect } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import ConsistencyGraph from "./ConsistencyGraph";
import SmileyFace from "../../assets/mood/smileyface.svg";
import "./index.css";
import {
  LeaderboardIcon,
  MyRoadmapIcon,
  RoadmapIcon,
} from "../../assets/sidebar";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const [stats, setStats] = useState({});
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchHomeStats = async () => {
      const res = await api.get("homeStats", {
        headers: { Authorization: user.accessToken },
      });
      setStats(res.data.homeStats);
    };

    fetchHomeStats();
  }, [user]);

  return (
    <SidebarLayout>
      <div className="home-container">
        <div>
          <h1>Hello {user.displayName} 👋</h1>
          <div className="stats-card">
            <section className="roadmaps-card card">
              <img src={RoadmapIcon} alt="" />
              <h2 className="title">Your Roadmaps</h2>
              <p className="count">{stats?.enrolledRoadmaps?.length || 0}</p>
            </section>
            <section className="progress-card card">
              <img src={LeaderboardIcon} alt="" />
              <h2 className="title">Your Points</h2>
              <p className="count">{stats?.progressStat}</p>
            </section>
            <section className="progress-card card">
              <img src={MyRoadmapIcon} alt="" />
              <h2 className="title">Total Roadmaps</h2>
              <p className="count">6</p>
            </section>
          </div>
          <section className="contribution-graph">
            <h2 className="title">Your consistency graph</h2>
            <ConsistencyGraph />
          </section>
        </div>
        <div className="daily-visit-card">
          <div>
            <img src={SmileyFace} alt="" />
            <p>Keep Learning! Keep Growing!</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Home;
