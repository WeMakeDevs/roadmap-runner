import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="primary-nav">
      <div>
        <Link to="/"><img src={Logo} alt="Homepage" /></Link>
        <div>RoadmapRunner</div>
      </div>
    </nav>
  );
};

export default Navbar;
