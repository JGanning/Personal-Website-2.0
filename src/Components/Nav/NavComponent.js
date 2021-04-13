import React, { Component, useState } from "react";
import Icon from "./Icon/Icon";
import Tabs from "./Tabs/Tabs";
import Contact from "./Contact/Contact";
import MediaLinks from "./MediaLinks/MediaLinks";

function NavComponent(props) {
  const [collapsed, setCollapsed] = useState("collapsed");

  const collapseExpand = (value) => {
    setCollapsed(value);
  };

  return (
    <div className="sidebar">
      <Icon collapsed={collapsed} returnToParent={collapseExpand} />
      <Tabs collapsed={collapsed} returnToParent={collapseExpand} />
      <div className="anchor">
        <Contact />
        <MediaLinks />
      </div>
    </div>
  );
}

export default NavComponent;
