import React, { Component } from "react";
import "./Skills.css";
import { UNDER_CONSTRUCTION } from "../../Constants/Generic_Constants";

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="skills">
        <h2>Skills Routing</h2>
        <h4>{UNDER_CONSTRUCTION}</h4>
      </div>
    );
  }
}

export default Skills;