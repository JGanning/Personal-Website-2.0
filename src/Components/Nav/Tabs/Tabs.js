import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Tabs = (props) => {
  return (
    <ul className={`${props.collapsed}`}>
      {/* <img className="logo" src={require("../../../assets/img/Logo.png")} alt="Profile Pic" /> */}
      {/* <li className="cancel tab">
        <div onClick={() => props.returnToParent("collapsed")}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </li> */}
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

      {/* <NavLink
        to="/music-lounge"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Music Lounge</li>
      </NavLink> */}

      {/* <NavLink
        to="/experiments"
        className="sidebar__Link list-padding"
        activeClassName="sidebar__Link--active"
      >
        <li className="tab">Experiments</li>
      </NavLink> */}
    </ul>
  );
};

export default withRouter(Tabs);
