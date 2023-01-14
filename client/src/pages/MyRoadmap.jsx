import React from "react";
import { useParams } from "react-router";

const MyRoadmap = () => {
  const { id } = useParams();
  return <div>MyRoadmap {id}</div>;
};

export default MyRoadmap;
