import React from "react";
import { useParams } from "react-router";
import SidebarLayout from "../components/SidebarLayout";

const MyRoadmap = () => {
  const { id } = useParams();
  
  return (
    <SidebarLayout>
      <div>MyRoadmap {id}</div>
    </SidebarLayout>
  );
};

export default MyRoadmap;
