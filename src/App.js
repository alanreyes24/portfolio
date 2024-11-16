import "./App.css";
import AboutMe from "./components/aboutme/aboutme.js";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Arial, sans-serif",
          marginTop: "50px",
          marginBottom: "50px",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        <AboutMe />
        <div
          style={{
            overflow: "scroll",
            width: "50%",
            height: "100%",
            backgroundColor: "aqua",
            // border: 1px black solid,
            // padding: 2%,
            // width: 300px,
            // margin: 0 auto,
            // white-space: nowrap,
            // font-size: large,
          }}
        >
          Scroll
        </div>
      </div>
    </>
  );
}

export default App;
