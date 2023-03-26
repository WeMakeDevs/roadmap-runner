import React from "react";
import { Link } from "react-router-dom";
import {
  CSSLogo,
  HTMLLogo,
  JSLogo,
  TSLogo,
  DbLogo,
  NodejsLogo,
  ReactLogo,
  ReduxLogo,
  GitLogo,
  MongoDBLogo,
} from "../../assets/tech";
import ContriGraph from "../../assets/contrigraph.svg";
import "./index.css";
import Logo from "../../assets/logo.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="wrapper">
        <img src={Logo} alt="" className="logo" />
        <h1>Roadmap Runner</h1>
        <p>Navigating the path to success, one roadmap at a time.</p>
        <Link to="/signin">
          Start Learning <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>

      <img src={ContriGraph} alt="" className="graph" />

      <img src={CSSLogo} alt="CSS logo" className="bg-logo css" />
      <img src={HTMLLogo} alt="CSS logo" className="bg-logo html" />
      <img src={JSLogo} alt="CSS logo" className="bg-logo js" />
      <img src={TSLogo} alt="CSS logo" className="bg-logo ts" />
      <img src={DbLogo} alt="CSS logo" className="bg-logo db" />
      <img src={NodejsLogo} alt="CSS logo" className="bg-logo nodejs" />
      <img src={ReactLogo} alt="CSS logo" className="bg-logo react" />
      <img src={ReduxLogo} alt="CSS logo" className="bg-logo redux" />
      <img src={GitLogo} alt="CSS logo" className="bg-logo git" />
      <img src={MongoDBLogo} alt="CSS logo" className="bg-logo mongodb" />
    </div>
  );
};

export default Landing;
