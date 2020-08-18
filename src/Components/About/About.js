import React, { Component } from "react";
import { UNDER_CONSTRUCTION } from "../../Constants/Generic_Constants";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>About Me</h2>
        <h4>{UNDER_CONSTRUCTION}</h4>
      </div>
    );
  }
}

export default About;