import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav/Nav.jsx";
import Name from "./components/header/Name.jsx";
import AboutMe from "./components/aboutme/AboutMe.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Name />
      <AboutMe />
    </>
  );
}

export default App;
