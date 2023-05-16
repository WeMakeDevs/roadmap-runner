import React from "react";
import { Link } from "react-router-dom";

const Card = ({ bannerImage, id, title, tagline }) => {
  return (
    <Link to={`/roadmaps/${id}`}>
      <section className="roadmap-card">
        <img src={bannerImage} alt="Roadmaps banner" />
        <h2>{title}</h2>
        <p>{tagline}</p>
      </section>
    </Link>
  );
};

export default Card;
