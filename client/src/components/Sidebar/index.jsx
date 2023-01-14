import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="link-wrapper">
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <i className="fa-solid fa-map"></i>
            <Link to="/roadmaps">Roadmaps</Link>
          </li>
          <li>
            <i className="fa-solid fa-map-location-dot"></i>
            <Link to="/myroadmaps">My Roadmaps</Link>
          </li>
          <li>
            <i className="fa-solid fa-medal"></i>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <i className="fa-solid fa-user"></i>
            <button>Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
