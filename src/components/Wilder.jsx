import React from "react";
import Skill from "./Skill";
import "../styles/Wilder.css"
import blank_profile from "../assets/blank_profile.png";

const Wilder = ({ name, skills }) => {
  return (
    <div>
      <section>
        <article className="card">
          <img src={blank_profile} alt="Jane Doe Profile" />
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {skills.map((skill) => (
            <Skill key={skill.title} title={skill.title} votes={skill.votes} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Wilder;
