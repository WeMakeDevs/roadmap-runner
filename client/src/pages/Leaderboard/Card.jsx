import React from "react";
import {
  First,
  Second,
  Third,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Medal,
} from "../../assets/medals/";

function getRankImage(rank) {
  switch (rank) {
    case 1:
      return First;
    case 2:
      return Second;
    case 3:
      return Third;
    case 4:
      return Four;
    case 5:
      return Five;
    case 6:
      return Six;
    case 7:
      return Seven;
    case 8:
      return Eight;
    case 9:
      return Nine;
    case 10:
      return Ten;
    default:
      return Medal;
  }
}

const Card = ({ rank, name, profileUrl, totalSections=0 }) => {
  return (
    <div className="leaderboard-card card">
      <div>
        <div className="rank">
          <img src={getRankImage(rank)} alt="" />
        </div>
        <div className="profile">
          <img src={profileUrl} alt="" />
        </div>
        <div>{name}</div>
      </div>
      <div className="points">Points: {totalSections || 0}</div>
    </div>
  );
};

export default Card;
