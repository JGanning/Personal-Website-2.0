import React from "react";

export const ProjectDescription = (props) => {
  return (
    <div className="col-lg-9 no-padding">
      <span className="project-description">{props.description}</span>
    </div>
  );
};

export default ProjectDescription;
