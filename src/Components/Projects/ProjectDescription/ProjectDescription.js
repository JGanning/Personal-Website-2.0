import React from "react";

export const ProjectDescription = (props) => {
  return (
    <div className="project-list">
      <p className={props.projectContent}>{props.description}</p>
    </div>
  );
};

export default ProjectDescription;
