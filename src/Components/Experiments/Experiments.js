import React, { Component } from "react";
import ExperimentsDescription from "./ExperimentsDescription/ExperimentsDescription";
import DragDrop from "./DragDrop/DragDrop";
import PieChart from "./PieChart/PieChart";
import Hierarchy from "./Trees/Hierarchy";
import FileTree from "./Trees/FileTree";
import CheckboxFolders from "./Trees/CheckboxFolders";
// import "./Experiments.css";

export class Experiments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="module col-lg-9 no-padding">
        <h2 className="header">Experiments</h2>
        <div className="experiments-body">
          <ExperimentsDescription />
          <Hierarchy />
          <CheckboxFolders />
          {/* <FileTree /> */}
          {/* <PieChart /> */}
          {/* <DragDrop /> */}
        </div>
      </div>
    );
  }
}

export default Experiments;
