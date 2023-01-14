import React from "react";
import { Link } from "react-router-dom";

const Card = ({ bannerImage, id, title, tagline }) => {
  return (
    <Link to={`/myroadmaps/${id}`}>
      <section className="roadmap-card">
        <img src={bannerImage} alt="" />
        <h2>{title}</h2>
        <p className="tagline">{tagline}</p>
        <p className="completed">50% completed</p>
      </section>
    </Link>
  );
};

export default Card;
