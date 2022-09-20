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
      .then((data) => {setTodos(data); calculateCompletedTodos(data);})
      .catch((error) => console.error(error));
  }, []);

  const addNewTodo = async (todo) => {
    const newTodo = {
      todo: todo,
      isCompleted: false,
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    const data = await TodoService.createTodo(newTodo).catch((error) =>
      console.error(`Error! failed to create the todo`)
    );
    const updatedTodos = [...todos, data];
    calculateCompletedTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleToggleChange = async (isChecked, id) => {
    const isTodo = todos.find((todo) => todo.id === id);
    if (isTodo) {
      const updatedTodo = await TodoService.updateTodo(id, {
        ...isTodo,
        isCompleted: isChecked,
      }).catch((error) => console.error(`Error! failed to update the todo`));
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) return { ...updatedTodo };
        return todo;
      });
      calculateCompletedTodos(updatedTodos);
      setTodos(updatedTodos);
    }
  };

  const calculateCompletedTodos = (todoItems) => {
    const compTodos = todoItems.filter((todo) => todo.isCompleted);
    setCompletedTodos(compTodos.length);
  };

  const handleTodoDelete = async (id) => {
    try {
      await TodoService.deleteTodo(id);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      calculateCompletedTodos(updatedTodos);
      setTodos(updatedTodos);
    } catch (res) {
      console.error(`Error! failed to delete the todo`);
    }
  };

  const handleTodoEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setUpdateTodo({
        ...todo,
      });
      setShowEditDialog(true);
    }
  };

  const handleClose = () => {
    setShowEditDialog(false);
  };

  const handleTodoUpdate = async () => {
    if (updateTodo.todo.trim().length === 0) {
      alert("Incorrect todo value");
    }
    try {
      const res = await TodoService.updateTodo(updateTodo.id, {
        ...updateTodo,
        todo: updateTodo.todo.trim(),
      });
      const updatedTodos = todos.map((todo) => {
        if (todo.id === updateTodo.id) return { ...res };
        return todo;
      });
      setTodos(updatedTodos);
      setUpdateTodo({ id: 0, todo: "" });
      handleClose();
    } catch (error) {
      console.error(`Error! failed to update the todo`);
    }
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
