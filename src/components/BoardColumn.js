import React from "react";
import TaskCard from "./TaskCard";

const BoardColumn = ({ title, tasks }) => {
  return (
    <div className="board-column">
      <h2>{title}</h2>
      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
