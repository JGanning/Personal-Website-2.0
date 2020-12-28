import React, { Component } from "react";
import "./NavComponent.css";

import Icon from "./Icon/Icon";
import Tabs from "./Tabs/Tabs";
import Contact from "./Contact/Contact";
import MediaLinks from "./MediaLinks/MediaLinks";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: "collapsed",
    };
  }

  collapseExpand = (value) => {
    this.setState({
      collapsed: value,
    });
  };

  render() {
    return (
      <div className="sidebar">
        <Icon collapsed={this.state.collapsed} returnToParent={this.collapseExpand} />
        <Tabs collapsed={this.state.collapsed} />
        <div className="anchor">
          <Contact />
          <MediaLinks />
        </div>
      </div>
    );
  }
}

export default NavComponent;
