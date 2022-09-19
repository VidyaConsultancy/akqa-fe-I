import { useState } from "react";

// react hooks were introduced with v16.8.0
// useState, useEffect, useLayoutEffect, useReducer, useRef

export const TodoHeader = ({ handleTodoAdd }) => {
  const [newTodo, setNewTodo] = useState(""); // returns as array with two elements 1) the state value 2) a function to mutate the state value
  const [todoError, setTodoError] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo.trim().length === 0) {
      setTodoError("Todo name is required");
      return;
    }
    setTodoError("");
    handleTodoAdd(newTodo.trim());
    setNewTodo('');
    // console.log(newTodo);
    // const input = document.getElementById('todo');
    // console.log(input.value);
  };

  return (
    <div className="todo-header">
      <h1 className="ff-quicksand text-center todo-title">Todos</h1>
      <form action="" className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo" className="form-label sr-only">
            What would you like to do?
          </label>
          <input
            type="text"
            className="form-input"
            id="todo"
            placeholder="What would you like to do?"
            value={newTodo}
            onChange={handleChange}
          />
          {todoError ? <small className="form-error">{todoError}</small> : null}
        </div>
      </form>
    </div>
  );
};
