import React, { Component } from "react";
import "./Projects.css";
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectName from './ProjectName/ProjectName';

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsArray: [
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
          name: "Bissy Bot",
          image: "",
          description: "Chat Bot in Python",
          link: "",
        },
        {
          name: "Music Player Extension",
          image: "",
          description: "Javascript Chrome extension to play music",
          link: "",
        },
        {
          name: "Magic 8 Ball",
          image: "",
          description: "First small project on Android in Java",
          link: "",
        },
        {
          name: "Magic 8 Ball",
          image: "",
          description: "First small project on Android in Java",
          link: "",
        },
        {
          name: "Magic 8 Ball",
          image: "",
          description: "First small project on Android in Java",
          link: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="projects col-lg-9 no-padding">
        <h2 className="projects-header no-margin">My Projects</h2>
        <div className="projects-body">
          {this.state.projectsArray.map((item, index) => {
            return (
              <div key={index} className="project row no-margin">
                <ProjectName name={item.name} />
                <ProjectDescription description={item.description} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
