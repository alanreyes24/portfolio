import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="project-container">
        <div className="project">
          <div className="project-image"> image here</div>
          <div className="project-name--description">
            <div className="project-name">BetterTyping</div>
            Developed a full-stack typing test web application supporting 5,000+
            completed typing sessions with multiple test modes and competitive
            leaderboards.Implemented secure authentication and session
            management, enabling personalized rankings and persistent
            performance history for 150+ active users. Designed and integrated
            interactive data visualizations and replays, helping users analyze
            typing speed and accuracy trends.
          </div>
        </div>
        <div className="project">
          <div className="project-image"> image here</div>
          <div className="project-name-description">
            <div className="project-name">Lingua</div>
            Built a macOS spaced-repetition flashcard app that improves study
            efficiency using adaptive scheduling algorithms and customizable
            decks. Designed an intuitive SwiftUI interface with animations and
            gesture controls for a smooth, responsive user experience.
            Integrated iCloud syncing for seamless cross-device access and
            persistent data storage.
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
