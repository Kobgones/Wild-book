import React from "react";
import WilderList from "./WilderList";
import WildersData from "../data/data";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="container">
      <h1>Wilders List</h1>
      <WilderList wilders={WildersData} />
    </div>
  );
};

export default Home;
