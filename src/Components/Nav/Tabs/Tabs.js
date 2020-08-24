import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Tabs.css";

export const Tabs = () => {
  return (
    <ul>
      <NavLink
        exact
        to="/"
        activeClassName="sidebar__Link--active"
        className="sidebar__Link list-padding"
      >
        <li className="tab">Home</li>
      </NavLink>

      <NavLink
        exact
        to="/bio"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Bio</li>
      </NavLink>

      <NavLink
        to="/projects"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Projects</li>
      </NavLink>

      <NavLink
        to="/skills"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Skills</li>
      </NavLink>

      <NavLink
        to="/resume"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Resume</li>
      </NavLink>

      <NavLink
        to="/music-lounge"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Music Lounge</li>
      </NavLink>
    </ul>
  );
};

export default withRouter(Tabs);
