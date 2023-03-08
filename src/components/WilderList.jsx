import React from "react";
import Wilder from "./Wilder";
import WildersData from "../data/data";
import "../styles/WilderList.css"

const WilderList = ({ wilders = { WildersData } }) => {
  return (
    <div className="container">
      <h2>Wilders</h2>
      <main className="card-row">
        {wilders.map((wilder) => (
          <Wilder key={wilder.name} name={wilder.name} skills={wilder.skills} />
        ))}
      </main>
    </div>
  );
};

export default WilderList;
