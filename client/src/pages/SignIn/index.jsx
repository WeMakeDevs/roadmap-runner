import React from "react";
import GoogleLogo from "../../assets/google.png";
import "./index.css";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="wrapper">
        <h1>Sign in</h1>
        <p>to RoadmapRunner</p>

        <button type="button">
          <img src={GoogleLogo} alt="" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
