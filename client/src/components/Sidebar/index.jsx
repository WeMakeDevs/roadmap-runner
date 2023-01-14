import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {
  HomeIcon,
  RoadmapIcon,
  MyRoadmapIcon,
  LeaderboardIcon,
  SignoutIcon,
} from "../../assets/sidebar/";
import { useLogout } from "../../hooks/useLogout";

const Sidebar = () => {
  const { logout, isPending } = useLogout();

  return (
    <div className="sidebar">
      <div className="link-wrapper">
        <ul>
          <li>
            {/* <i className="fa-solid fa-house"></i> */}
            <img src={HomeIcon} alt="" />
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* <i className="fa-solid fa-map"></i> */}
            <img src={RoadmapIcon} alt="" />
            <Link to="/roadmaps">Roadmaps</Link>
          </li>
          <li>
            {/* <i className="fa-solid fa-map-location-dot"></i> */}
            <img src={MyRoadmapIcon} alt="" />
            <Link to="/myroadmaps">My Roadmaps</Link>
          </li>
          <li>
            {/* <i className="fa-solid fa-medal"></i> */}
            <img src={LeaderboardIcon} alt="" />
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            {/* <i className="fa-solid fa-user"></i> */}
            <img src={SignoutIcon} alt="" />
            <button onClick={logout}>Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
