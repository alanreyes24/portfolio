import React from "react";
import AboutMe from "./components/aboutme/aboutme.js";
import Description from "./components/description/description.js";
import Navigator from "./components/navigator/navigator.js";
import Experience from "./components/experience/experience.js";
import Projects from "./components/projects/projects.js";
import Education from "./components/education/education.js";

function App() {
  return (
    <div class="bg-gradient-to-r from-indigo-900 via-purple-800 to-black min-h-screen">
      <div class="flex justify-center items-center h-screen font-sans mt-12 mb-12 mx-24">
        <div class="h-screen w-[60%]">
          <Description />
          <Navigator />
        </div>
        <div class="w-[60%] h-[100%] max-h-screen sticky top-0 overflow-y-auto">
          <AboutMe />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
