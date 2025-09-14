// src/App.js

import React from "react";
import Board from "./components/Board";
import "./styles.css";

// Importe a logo. Certifique-se de que o caminho está correto.
// Se você está usando a imagem hospedada no GitHub, pode usar o link direto.
const logoUrl =
  "https://raw.githubusercontent.com/dani-cavalcanti/traceland-app/master/assets/Traceland.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logoUrl} alt="Logo da Traceland" className="app-logo" />
        <h1>Traceland</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
