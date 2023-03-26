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
            <Link to="/home">
              {/* <i className="fa-solid fa-house"></i> */}
              <img src={HomeIcon} alt="" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/roadmaps">
              {/* <i className="fa-solid fa-map"></i> */}
              <img src={RoadmapIcon} alt="" />
              <span>Roadmaps</span>
            </Link>
          </li>
          <li>
            <Link to="/myroadmaps">
              {/* <i className="fa-solid fa-map-location-dot"></i> */}
              <img src={MyRoadmapIcon} alt="" />
              <span>My Roadmaps</span>
            </Link>
          </li>
          <li>
            <Link to="/leaderboard">
              {/* <i className="fa-solid fa-medal"></i> */}
              <img src={LeaderboardIcon} alt="" />
              <span>Leaderboard</span>
            </Link>
          </li>
          <li>
            {/* <i className="fa-solid fa-user"></i> */}
            <img src={SignoutIcon} alt="" />
            <button onClick={logout}>
              <span>Sign out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
