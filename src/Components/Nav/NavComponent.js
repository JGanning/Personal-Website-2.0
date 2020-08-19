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
          <NavLink
            exact
            to="/"
            activeClassName="sidebar__Link--active"
            className="sidebar__Link list-padding"
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            exact
            to="/about"
            className="sidebar__Link list-padding"
            activeClassName="sidebar__Link--active"
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/projects"
            className="sidebar__Link list-padding"
            activeClassName="sidebar__Link--active"
          >
            <li> Projects</li>
          </NavLink>

          <NavLink
            to="/skills"
            className="sidebar__Link list-padding"
            activeClassName="sidebar__Link--active"
          >
            <li> Skills</li>
          </NavLink>

          <NavLink
            to="/resume"
            className="sidebar__Link list-padding"
            activeClassName="sidebar__Link--active"
          >
            <li> Resume</li>
          </NavLink>

          <NavLink
            to="/music-room"
            className="sidebar__Link list-padding"
            activeClassName="sidebar__Link--active"
          >
            <li> Music Room</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavComponent);
