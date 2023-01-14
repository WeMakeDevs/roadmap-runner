import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Users from "../../assets/users.png";
import leaderboardData from "../../data/leaderboard.json";
import Card from "./Card";
import "./index.css";

const Leaderboard = () => {
  const [topLearners, setTopLearners] = useState();

  useEffect(() => {
    async function fetchRoadmaps() {
      setTopLearners(leaderboardData.data.leaderboard);
    }

    fetchRoadmaps();
  }, []);

  return (
    <SidebarLayout>
      <div className="leaderboard-container">
        <div className="leaderboard">
          <h1>Leaderboard 🏆</h1>
          <div className="leaderboard-card-container">
            {topLearners &&
              topLearners.map((topLearner, idx) => (
                <Card
                  rank={idx + 1}
                  name={topLearner.name}
                  profileUrl={topLearner.profileUrl}
                  totalSections={topLearner.totalSections}
                />
              ))}
          </div>
        </div>
        <div className="stats">
          <div>
            <img src={Users} alt="" />
            <p className="stats-title">Total Learners</p>
            <p className="stats-count">10+</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Leaderboard;
