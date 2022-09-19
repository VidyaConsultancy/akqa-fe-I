import React from "react";
import { TodoHeader } from "../todo-header/todo-header";
import { TodoFooter } from "../todo-footer/todo-footer";
import { TodoItem } from "../todo-item/todo-item";
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
    <div className="todos">
      <TodoHeader />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <TodoFooter />
    </div>
  );
};
