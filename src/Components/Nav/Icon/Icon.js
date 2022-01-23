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
      <img
        className="logo"
        src={require("../../../assets/img/Logo.png")}
        alt="Profile Pic"
      />
      <img
        className="expand"
        src={require("../../../assets/img/Hamburger_icon.svg")}
        alt="Borger"
        onClick={expandCollapse}
      />
    </div>
  );
}

export default Icon;
