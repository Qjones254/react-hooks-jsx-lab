import React from "react";
import { name, city } from "../data/data.js";
import "./home.css"


function Home() {

  // update the JSX being returned!
  return <div id="home">
  <h1 id="h1">Your {name} is a Web Developer from Your {city}</h1>
  </div>;
}

export default Home;
