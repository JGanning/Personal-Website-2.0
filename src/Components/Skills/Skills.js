import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="skills col-lg-9">
        <h2>Skills</h2>
        <div className="devicons">
          <div className="icons frameworks">
            <i class="devicon-angularjs-plain"></i>
            <i class="devicon-react-original-wordmark"></i>
          </div>
          <div className="icons front-end">
            <i className="devicon-javascript-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
          </div>
          <div className="icons service">
            <i class="devicon-java-plain-wordmark"></i>
            <i class="devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="icons database">
            <i class="devicon-postgresql-plain-wordmark"></i>
            <i class="devicon-oracle-original"></i>
            <i class="devicon-mysql-plain-wordmark"></i>
          </div>
          <div className="icons misc">
            <i class="devicon-git-plain"></i>
            <i class="devicon-python-plain"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
