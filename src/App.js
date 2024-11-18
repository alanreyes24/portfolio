import React from "react";
import AboutMe from "./components/aboutme/aboutme.js";
import Description from "./components/description/description.js";
import Card from "./components/card/card.js";
import Navigator from "./components/navigator/navigator.js";

function App() {
  return (
    <div class="bg-gradient-to-r from-blue-500 to-blue-500">
      <div class="flex justify-center items-center h-screen font-sans mt-12 mb-12 mx-24">
        <div class="h-screen">
          <Description />
          <Navigator />
        </div>
        <div class="w-[70%] max-h-screen sticky top-0 overflow-y-auto">
          <AboutMe />
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
