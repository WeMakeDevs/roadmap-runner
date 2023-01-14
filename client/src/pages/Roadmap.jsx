import React from "react";
import { useParams } from "react-router";

const Roadmap = () => {
  const { id } = useParams();

  return <div>Roadmap {id}</div>;
};

export default Roadmap;
