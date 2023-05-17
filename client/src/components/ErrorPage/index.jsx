import React from "react";
import "./index.css";
import SadFace from "../../assets/mood/sadface.svg";

const ErrorPage = ({ message = "Something went wrong" }) => {
  return (
    <div className="error-page">
      <img src={SadFace} alt="Sad Face" />
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorPage;
