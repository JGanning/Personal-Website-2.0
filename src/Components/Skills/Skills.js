import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="skills col-lg-9 no-padding">
        <h2 className="skills-header">Skills</h2>
        <div className="devicons">
          <div className="icons frameworks">
            <i className="devicon-angularjs-plain"></i>
            <i className="devicon-react-original-wordmark"></i>
          </div>
          <div className="icons front-end">
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
          </div>
          <div className="icons service">
            <i className="devicon-java-plain-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="icons database">
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-oracle-original"></i>
            <i className="devicon-mysql-plain-wordmark"></i>
          </div>
          <div className="icons misc">
            <i className="devicon-git-plain"></i>
            <i className="devicon-python-plain"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
