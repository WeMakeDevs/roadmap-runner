import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Users from "../../assets/users.png";
import Card from "./Card";
import "./index.css";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loader from "../../components/Loader";

const Leaderboard = () => {
  const [topLearners, setTopLearners] = useState();
  const [totalLearners, setTotalLearners] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    async function fetchRoadmaps() {
      setLoading(true);
      const res = await api.get("leaderboard", {
        headers: { Authorization: user.accessToken },
      });
      setLoading(false);
      setTopLearners(res.data.users);
      setTotalLearners(res.data.count);
    }

    fetchRoadmaps();
  }, [user]);

  if(loading) {
    return <SidebarLayout><Loader /></SidebarLayout>
  }

  return (
    <SidebarLayout>
      <div className="leaderboard-container">
        <div className="leaderboard">
          <h1>Leaderboard 🏆</h1>
          <div className="leaderboard-card-container">
            {topLearners &&
              topLearners.map((topLearner, idx) => (
                <Card
                  key={topLearner._id}
                  rank={idx + 1}
                  name={topLearner.name}
                  profileUrl={topLearner.displayPicture}
                  totalSections={topLearner.progressStat}
                />
              ))}
          </div>
        </div>
        <div className="stats">
          <div>
            <img src={Users} alt="" />
            <p className="stats-title">Total Learners</p>
            <p className="stats-count">{totalLearners}</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Leaderboard;
