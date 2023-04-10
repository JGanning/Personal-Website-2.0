import React from "react";

export const ProjectName = (props) => {
  function linkRedirect(url) {
    if(url) {
      window.open(url, '_blank');
      return null;
    }
  }

  return (
    <span
      className="project-name"
      onClick={() => linkRedirect(props.link)}>
        {props.name}
      </span>
    );
};

export default ProjectName;
