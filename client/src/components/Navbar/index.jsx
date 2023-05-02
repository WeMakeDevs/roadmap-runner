import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="primary-nav">
      <div>
        <a href="/">
          <img src={Logo} alt="Roadmap Runner logo" />
        </a>
        <div>RoadmapRunner</div>
      </div>
    </nav>
  );
};

export default Navbar;
