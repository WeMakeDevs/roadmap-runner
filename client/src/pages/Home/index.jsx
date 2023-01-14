import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import ConsistencyGraph from "./ConsistencyGraph";
import SmileyFace from "../../assets/mood/smileyface.svg";
import "./index.css";
import { LeaderboardIcon, MyRoadmapIcon, RoadmapIcon } from "../../assets/sidebar";

const Home = ({loading = true}) => {

  return (
    <SidebarLayout>
      <div className="home-container">
        <div>
          <h1>Hello Siddhi 👋</h1>
          <div className="stats-card">
            <section className="roadmaps-card card">
              <img src={RoadmapIcon} alt="" />
              <h2 className="title">Your Roadmaps</h2>
              <p className="count">2</p>
            </section>
            <section className="progress-card card">
            <img src={LeaderboardIcon} alt="" />
              <h2 className="title">Your Progress</h2>
              <p className="count">10%</p>
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
