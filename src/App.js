import React from "react";
import AboutMe from "./components/aboutme/aboutme.js";
import Description from "./components/description/description.js";
import Navigator from "./components/navigator/navigator.js";

function App() {
  return (
    <div class="bg-gradient-to-r from-sky-500 to-teal-500">
      <div class="flex justify-center items-center h-screen font-sans mt-12 mb-12 mx-24">
        <div class="h-screen">
          <Description />
          <Navigator />
        </div>
        <div class="w-[70%] max-h-screen sticky top-0 overflow-y-auto">
          <AboutMe />
          <div id="bettertyping">
            <div class="m-2 text-white text-1xl font-bold">
              bettertyping - a sleek, minimalist typing test website{" "}
            </div>
            <div class="text-white m-2">
              {" "}
              bettertyping is a simple and effective typing platform designed to
              help users practice and improve their skills. It offers a variety
              of test modes, including timed challenges, to suit different
              preferences and goals. Users can see how they stack up against
              others through a competitive leaderboard, fostering motivation and
              engagement. The platform is optimized for smooth performance
              across devices, featuring a clean, user-friendly interface. Built
              with React, Node.js, and MongoDB, and hosted on Railway,
              BetterTyping provides a reliable and accessible way for anyone to
              enhance their typing abilities.
            </div>
          </div>
          <div id="virtualstudygroup">
            <div class="m-2 text-white 1xl font-bold">
              {" "}
              Virtual Study Group - a MacOS group studying app{" "}
            </div>
            <div class="text-white m-2">
              {" "}
              Designed for collaborative learning, Virtual Study Group is a
              macOS app that connects students in virtual rooms where they can
              study together. Developed with Swift and SwiftUI and supported by
              Firebase, the app utilizes WebRTC to provide tools like screen
              sharing, video conferencing, and a shared Pomodoro timer to
              enhance focus and productivity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
