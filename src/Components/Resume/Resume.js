import React, { Component } from "react";
import "./Resume.css";
import { UNDER_CONSTRUCTION } from "../../Constants/Generic_Constants";

export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="resume">
        <h2>Resume</h2>
        <h4>{UNDER_CONSTRUCTION}</h4>
        <p></p>
      </div>
    );
  }
}

export default Resume;
