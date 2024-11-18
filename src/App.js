import React from "react";
import AboutMe from "./components/aboutme/aboutme.js";
import Description from "./components/description/description.js";

function App() {
  return (
    <div class="bg-gradient-to-r from-sky-500 to-teal-500">
      <div class="flex justify-center items-center h-screen font-sans mt-12 mb-12 mx-24">
        <div class="h-screen">
          <Description />
        </div>
        <div class="w-[50%] max-h-screen sticky top-0 overflow-y-auto">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App;
