import React, { useState, useRef, useEffect } from "react";
import Icon from "./Icon/Icon";
import Tabs from "./Tabs/Tabs";
import Contact from "./Contact/Contact";
import MediaLinks from "./MediaLinks/MediaLinks";
import OutsideClick from "./EventListener";

function NavComponent(props) {
  const [collapsed, setCollapsed] = useState("collapsed");
  const boxRef = useRef(null);
  const boxOutsideClick = OutsideClick(boxRef);

  const collapseExpand = (value) => {
    setCollapsed(value);
  };

  useEffect(() => {
    boxOutsideClick && setCollapsed("collapsed");
  }, [boxOutsideClick]);

  return (
    <div className="sidebar" ref={boxRef}>
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
