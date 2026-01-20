import { useState } from "react";
import "./App.css";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="main-container">
      <div className="left-side">
        <div className="name">Alan Reyes</div>
        <div className="school">
          Computer Science @ Washington University in St. Louis
        </div>
        <div className="links">
          <div className="icon">github</div>
          <div className="icon">linkedin</div>
        </div>
      </div>
      <div className="right-side">
        <div className="about-me">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
      </div>
    </div>
  );
}

export default App;
