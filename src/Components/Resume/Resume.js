import React, { Component } from "react";
import "./Resume.css";
import "../../"

export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="resume col-lg-9">
        <h2>Resume</h2>
        <div className="download">
          <a href="../../assets/img/josephganning_resume.pdf" download>Download Resume</a>
        </div>
        
        <div className="resume-container col-lg-12">
          <div className="resume-body"></div>
        </div>
      </div>
    );
  }
}

export default Resume;
