import React, { useState } from "react";
import { skillObjArray } from "./Constants";
import Devicons from "./Devicons/Devicons";
import Descriptions from "./Descriptions/Descriptions";

function Skills(props) {
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
              <div className="col-lg-3 no-padding skill-icon ">
                <Devicons devicon={item.icon} />
              </div>
              <div className="col-lg-9 no-padding">
                <Descriptions text={item.text} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
