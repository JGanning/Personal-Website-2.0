import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./MediaLinks.css";

export const MediaLinks = () => {
  return (
      <div className="media-links">
        <a className="media-icon" href="https://github.com/JGanning">
          <FaGithub />
        </a>
        <a
          className="media-icon"
          href="https://www.linkedin.com/in/joseph-ganning/"
        >
          <FaLinkedinIn />
        </a>
      </div>
  );
};

export default MediaLinks;
