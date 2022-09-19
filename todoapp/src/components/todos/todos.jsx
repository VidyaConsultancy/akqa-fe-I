import React from "react";
import "./todos.css";

export const Todos = () => {
  const todos = [
    {
      id: 1,
      todo: "Learn JavaScript",
      isCompleted: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: 2,
      todo: "Learn HTML",
      isCompleted: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: 3,
      todo: "Learn CSS | SASS",
      isCompleted: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: 4,
      todo: "Learn Reactjs",
      isCompleted: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
  ];

  return (
    <ul className="todos" role="list">
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>{todo.todo}</li>
      ))}
    </ul>
  );
};
