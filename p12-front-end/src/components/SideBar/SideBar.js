import React from "react";
import "./SideBar.css";
import GetIcon from "../GetIcon/GetIcon";

function SideBar() {
  return (
    <div className="vertical-nav">
      <div className="vertical-nav-icon">
        <GetIcon icon="yoga" />
        <GetIcon icon="swim" />
        <GetIcon icon="bike" />
        <GetIcon icon="dumbbell" />
      </div>
      <p className="vertical-nav-text">Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideBar;