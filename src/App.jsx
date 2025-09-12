import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav/Nav.jsx";
import Name from "./components/header/Name.jsx";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <main>
        <section>
          <Name />
        </section>
      </main>
    </>
  );
}

export default App;
