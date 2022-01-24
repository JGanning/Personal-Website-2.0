import React from "react";

function Icon(props) {
  const expandCollapse = () => {
    let value;
    props.collapsed === "collapsed"
      ? (value = "expanded")
      : (value = "collapsed");
    props.returnToParent(value);
  };

  return (
    <div className="icon">
      <div
        className={props.collapsed === "collapsed" ? "expand" : "hide"}
        onClick={expandCollapse}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <img
        className="logo"
        src={require("../../../assets/img/Logo.png")}
        alt="Profile Pic"
      />

      {/* <img
        className="expand"
        src={require("../../../assets/img/Hamburger_icon.svg")}
        alt="Borger"
        onClick={expandCollapse}
      /> */}
    </div>
  );
}

export default Icon;
