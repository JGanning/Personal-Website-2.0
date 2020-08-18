import React, { Component } from "react";
import "./About.css";
import { UNDER_CONSTRUCTION } from "../../Constants/Generic_Constants";
// import * from "../../assets/img";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <h2>About Me</h2>
        <h4>{UNDER_CONSTRUCTION}</h4>
        <img src={require("../../assets/img/shrek.PNG")} alt="Profile Pic" />
      </div>
    );
  }
}

export default About;