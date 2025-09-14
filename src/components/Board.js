import React from "react";
import BoardColumn from "./BoardColumn";

const mockData = {
  trabalho: [
    { id: "1", text: "Revisar PR #1234" },
    { id: "2", text: "Planejar sprint 3" },
  ],
  lazer: [{ id: "3", text: "Comprar ingressos para o cinema" }],
  estudos: [{ id: "4", text: "Aprender sobre o framework X" }],
};

const Board = () => {
  return (
    <div className="board-container">
      <BoardColumn title="Trabalho" tasks={mockData.trabalho} />
      <BoardColumn title="Lazer" tasks={mockData.lazer} />
      <BoardColumn title="Estudos" tasks={mockData.estudos} />
    </div>
  );
};

export default Board;
