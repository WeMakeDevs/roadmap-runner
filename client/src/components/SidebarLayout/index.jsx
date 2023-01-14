import React from "react";
import Sidebar from "../Sidebar";
import "./index.css";

const SidebarLayout = ({ children }) => {
  return (
    <div className="sidebar-layout">
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SidebarLayout;
