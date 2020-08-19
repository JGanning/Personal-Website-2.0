import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import "./NavComponent.css";

import Icon from "./Icon/Icon";
import Tabs from "./Tabs/Tabs";
import Contact from "./Contact/Contact";
import MediaLinks from "./MediaLinks/MediaLinks";

export const NavComponent = () => {
  return (
    <div className="sidebar">
      <Icon />
      <Tabs />
      <div className="anchor">
        <Contact />
        <MediaLinks />
      </div>
    </div>
  );
};

export default NavComponent;
