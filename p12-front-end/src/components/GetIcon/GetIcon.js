import React from "react";
import icons from "../../Icons/Icons.js";
import PropTypes from "prop-types";
import "./GetIcon.css";


function GetIcon({ icon }) {
  return (
    <div className="get-icon">
      <img src={icons[icon]} alt="icon" /> 
    </div>
  );
}


GetIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default GetIcon;