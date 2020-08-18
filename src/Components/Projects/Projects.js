import React, { Component } from "react";
import "./Projects.css";
import { UNDER_CONSTRUCTION } from "../../Constants/Generic_Constants";

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="projects">
        <h2>My Projects</h2>
        <h4>{UNDER_CONSTRUCTION}</h4>
      </div>
    );
  }
}

export default Projects;