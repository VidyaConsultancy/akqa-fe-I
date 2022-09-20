import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { TodoService } from "../../services/todos.service";
import { TodoHeader } from "../todo-header/todo-header";
import { TodoFooter } from "../todo-footer/todo-footer";
import { TodoItem } from "../todo-item/todo-item";
import "./todos.css";

export const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  const [completedTodos, setCompletedTodos] = React.useState(0);
  const [showEditDialog, setShowEditDialog] = React.useState(false);
  const [updateTodo, setUpdateTodo] = React.useState({ id: 0, todo: "" });

  // useEffect hook implments componentDidMount, componentWillUnmount, componentDidUpdate, shouldComponentUpdate
  React.useEffect(() => {
    TodoService.fetchTodos()
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const addNewTodo = (todo) => {
    const updatedTodos = [
      ...todos,
      {
        id: todos.length + 1,
        todo: todo,
        isCompleted: false,
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
    ];
    calculateCompletedTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleToggleChange = (isChecked, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, isCompleted: isChecked };
      return todo;
    });
    calculateCompletedTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const calculateCompletedTodos = (todoItems) => {
    const compTodos = todoItems.filter((todo) => todo.isCompleted);
    setCompletedTodos(compTodos.length);
  };

  const handleTodoDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    calculateCompletedTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleTodoEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setUpdateTodo({
        id: id,
        todo: todo.todo,
      });
      setShowEditDialog(true);
    }
  };

  const handleClose = () => {
    setShowEditDialog(false);
  };

  const handleTodoUpdate = () => {
    if (updateTodo.todo.trim().length === 0) {
      alert("Incorrect todo value");
    }
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updateTodo.id)
        return { ...todo, todo: updateTodo.todo.trim() };
      return todo;
    });
    calculateCompletedTodos(updatedTodos);
    setTodos(updatedTodos);
    setUpdateTodo({ id: 0, todo: "" });
    handleClose();
  };

  return (
    <div className="todos">
      <TodoHeader handleTodoAdd={addNewTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleChange={handleToggleChange}
            handleDelete={handleTodoDelete}
            handleEdit={handleTodoEdit}
          />
        ))}
      </ul>
      <TodoFooter total={todos.length} completed={completedTodos} />
      <Dialog open={showEditDialog} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>Update todo details below</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What you would like to do?"
            type="text"
            fullWidth
            variant="standard"
            value={updateTodo.todo}
            onChange={(e) =>
              setUpdateTodo({ ...updateTodo, todo: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleTodoUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
