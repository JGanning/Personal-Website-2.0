import React from "react";

export const ProjectName = (props) => {
  return (
    <div className="col-lg-3 no-padding">
      <span className="project-name">{props.name}</span>
    </div>
  );
};

export default ProjectName;
