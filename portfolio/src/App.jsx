import { useState } from "react";
import "./App.css";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="main-container">
      <div className="left-side">
        <div className="name">Alan Reyes</div>
        <div className="school">Computer Science @ WashU</div>
        <div className="links">
          <div className="icon">github</div>
          <div className="icon">linkedin</div>
        </div>
      </div>
      <div className="right-side">
        <div className="about-me">I'm a computer science blah blah</div>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
