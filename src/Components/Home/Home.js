import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <h2>Welcome to my Website</h2>
      </div>
    );
  }
}

export default Home;