import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectName from "./ProjectName/ProjectName";
import * as projectActions from "./Project_State_MGMT/Project-ActionCreator";
import _ from "lodash";

function Projects(props) {
  const { getProjects } = useSelector((state) => ({
    getProjects: state.projectReducer.getProjects,
  }));

  const dispatch = useDispatch();

  let projectsArray = [
    {
      name: "JGanning Backend",
      image: "",
      description: "Java code for this website",
      link: "",
    },
    {
      name: "Kois R Us",
      image: "",
      description: "School Project in PHP",
      link: "",
    },
    {
      name: "Bot Jingleheimer",
      image: "",
      description: "Chat Bot in Python",
      link: "",
    },
    {
      name: "Music Player Extension",
      image: "",
      description: "Javascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play musicJavascript Chrome extension to play music",
      link: "",
    },
    {
      name: "Magic 8 Ball",
      image: "",
      description: "First small project on Android in Java",
      link: "",
    },
  ];
  const [projects, setProjects] = useState(projectsArray);

  useEffect(() => {
    dispatch(projectActions.getProjects());
  });

  useEffect(() => {
    //Demonstrate use of reducer data
    if (!_.isEmpty(getProjects)) {
      setProjects(getProjects);
    }
  }, [getProjects]);

  return (
    <div className="projects col-lg-12 no-padding">
      <div className="col-lg-12 no-padding black-bg">
        <div className="col-lg-9 no-padding">
          <h2 className="header no-margin">Projects</h2>
        </div>
      </div>
      <div className="projects-body">
        {projects &&
          projects.map((item, index) => {
            return (
              <div key={index} className="project row no-margin">
                <div className="col-lg-3 no-padding">
                  <ProjectName name={item.name} />
                </div>
                <div className="project-description col-lg-9 no-padding">
                  <ProjectDescription
                    projectContent="project-content"
                    description={item.description}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Projects;
