import React, { Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import "./NavComponent.css";

export class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <ul>
          <NavLink to="/home" className="list-padding">
            <li>Home</li>
          </NavLink>

          <NavLink to="/about" className="list-padding">
            <li>About</li>
          </NavLink>

          <NavLink to="/projects" className="list-padding">
            <li> Projects</li>
          </NavLink>

          <NavLink to="/skills" className="list-padding">
            <li> Skills</li>
          </NavLink>

          <NavLink to="/resume" className="list-padding">
            <li> Resume</li>
          </NavLink>

          <NavLink to="/music-room" className="list-padding">
            <li> Music Room</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavComponent);
