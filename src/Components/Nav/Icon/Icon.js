import React from "react";
import "./Icon.css";

export const Icon = () => {
  return (
    <div className="icon">
      <img src={require("../../../assets/img/Logo.png")} alt="Profile Pic" />
    </div>
  );
};

export default Icon;
