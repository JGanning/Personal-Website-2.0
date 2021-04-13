import React, { Component, useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./Skills.css";
import Devicons from "./Devicons/Devicons";
import Descriptions from "./Descriptions/Descriptions";

function Skills(props) {
  let skillObjArray = [
    {
      text: "Worked at GE building Angular Apps",
      icon: <i className="devicon-angularjs-plain"></i>,
    },
    {
      text: "Working at Wells Fargo building React Apps",
      icon: <i className="devicon-react-original-wordmark"></i>,
    },
    {
      text: "Use Javascript in frontend dev work",
      icon: <i className="devicon-javascript-plain"></i>,
    },
    {
      text: "Use HTML in frontend dev work",
      icon: <i className="devicon-html5-plain-wordmark"></i>,
    },
    {
      text: "Use CSS in frontend dev work",
      icon: <i className="devicon-css3-plain-wordmark"></i>,
    },
    {
      text: "Use Java for service programming at GE and Wells Fargo",
      icon: <i className="devicon-java-plain-wordmark"></i>,
    },
    {
      text: "Used NodeJS for Service programming at GE",
      icon: <i className="devicon-nodejs-plain-wordmark"></i>,
    },
    {
      text: "Postgres DB at GE",
      icon: <i className="devicon-postgresql-plain-wordmark"></i>,
    },
    {
      text: "Oracle DB at GE",
      icon: <i className="devicon-oracle-original"></i>,
    },
    {
      text: "MySQL at Montclair",
      icon: <i className="devicon-mysql-plain-wordmark"></i>,
    },
    {
      text: "Use Git as Source Control for every project",
      icon: <i className="devicon-git-plain"></i>,
    },
    {
      text: "Built chat bots for charity events",
      icon: <i className="devicon-python-plain"></i>,
    },
  ];
  const [skillArray, setSkillArray] = useState(skillObjArray);
  return (
    <div className="skills col-lg-12 no-padding">
      <div className="col-lg-12 no-padding black-bg">
        <div className="col-lg-9 no-padding">
          <h2 className="header no-margin">Skills</h2>
        </div>
      </div>
      <div className="skills-body">
        {skillArray.map((item, index) => {
          return (
            <div className="skill row no-margin" key={index}>
              <div className="col-lg-3 no-padding">
                <Devicons devicon={item.icon} />
              </div>
              <div className="col-lg-9 no-padding">
                <Descriptions text={item.text} />
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="devicons">
        <div className="icons frameworks">
          <i className="devicon-angularjs-plain"></i>
          <i className="devicon-react-original-wordmark"></i>
        </div>
        <div className="icons front-end">
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
        </div>
        <div className="icons service">
          <i className="devicon-java-plain-wordmark"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
        </div>
        <div className="icons database">
          <i className="devicon-postgresql-plain-wordmark"></i>
          <i className="devicon-oracle-original"></i>
          <i className="devicon-mysql-plain-wordmark"></i>
        </div>
        <div className="icons misc">
          <i className="devicon-git-plain"></i>
          <i className="devicon-python-plain"></i>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;