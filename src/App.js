import React from "react";
import Board from "./components/Board";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Traceland</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
