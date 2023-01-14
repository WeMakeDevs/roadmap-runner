import React from "react";
import { useParams } from "react-router";
import SidebarLayout from "../components/SidebarLayout";

const Roadmap = () => {
  const { id } = useParams();

  return (
    <SidebarLayout>
      <div>Roadmap {id}</div>
    </SidebarLayout>
  );
};

export default Roadmap;
