import React from "react";

export const ProjectDescription = (props) => {
  return (
    <div className="project-description col-lg-9 no-padding container">
      <p className="project-content">{props.description}</p>
    </div>
  );
};

export default ProjectDescription;
