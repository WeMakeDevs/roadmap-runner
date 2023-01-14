import React from "react";
import GoogleLogo from "../../assets/google.png";
import "./index.css";
import Logo from "../../assets/logo.png";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="wrapper card">
        <img src={Logo} alt="" className="logo" />
        <h1>Sign in</h1>
        <p>to RoadmapRunner</p>

        <button type="button card">
          <div className="logo-div"><img src={GoogleLogo} alt="" /></div>
          <div>Continue with Google</div>
           
        </button>
      </div>
    </div>
  );
};

export default SignIn;
