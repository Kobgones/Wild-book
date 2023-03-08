import React from "react";
import "../styles/Skill.css"

const Skill = ({ title, votes }) => {
  return (
    <div>
      {" "}
      <ul className="skills">
        <li key={title}>
          {title}
          <span className="votes">{votes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
