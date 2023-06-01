import React from "react";
import "./index.css";
import SadFace from "../../assets/mood/sadface.svg";

const EmptyPage = ({ message = "Nothing found", children }) => {
  return (
    <div className="empty-page">
      <img src={SadFace} alt="Sad Face" />
      <h1>{message}</h1>
      {children}
    </div>
  );
};

export default EmptyPage;
