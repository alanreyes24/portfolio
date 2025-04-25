import React from "react";

function Projects() {
  return (
    <>
      <div class="text-white font-bold m-5"> PROJECTS </div>

      <div class="text-white m-5">
        <div class="font-bold">bettertyping</div>
        <div>
          Collaborated with a partner to develop and deploy a full-stack web
          application featuring a React frontend and a MongoDB backend, allowing
          users to test and track their typing speeds. Implemented a robust
          database system for storing test results, including a dynamic
          leaderboard and detailed typing history to support personalized
          progress tracking.
        </div>
      </div>
      <div class="text-white m-5">
        <div class="font-bold">Lingua</div>
        <div>
          Developed a Swift/SwiftUI macOS spaced repetition flashcard app to
          enhance learning efficiency through scheduling algorithms and
          customizable flashcard decks. Designed an intuitive user interface
          using SwiftUI animations and gestures, with additional features
          including progress tracking and iCloud integration for seamless device
          syncing.
        </div>
      </div>
    </>
  );
}

export default Projects;
