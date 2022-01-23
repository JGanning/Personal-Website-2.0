import React from "react";
import * as Constants from "./About-Constants";

function About(props) {
  return (
    <div className="about col-lg-9 no-padding">
      <h2 className="header">About Me</h2>
      <img src={require("../../assets/img/shrek.PNG")} alt="Profile Pic" />
      <div className="about-desc">
        <p>{Constants.p1}</p>
        <p>{Constants.p2}</p>
        <p>{Constants.p3}</p>
      </div>
    </div>
  );
}

export default About;
