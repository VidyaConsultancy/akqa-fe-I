import { IconButton, Checkbox, FormControlLabel } from "@mui/material";
import { DeleteOutline, ModeEditOutline } from "@mui/icons-material";
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const TodoItem = ({
  todo,
  isCompleted,
  id,
  createdAt,
  handleChange,
  handleDelete,
  handleEdit,
}) => {
  const formatDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    return `${day} ${MONTHS[month]}`;
  };
  return (
    <li
      className={`todo-item ${isCompleted ? "todo-item--completed" : ""}`}
      id={`todo-${id}`}
    >
      <FormControlLabel
        className="todo-name"
        label={todo}
        control={
          <Checkbox
            checked={isCompleted}
            onChange={(e) => handleChange(e.target.checked, id)}
          />
        }
      />
      <small className="todo-date">{formatDate(createdAt)}</small>
      <div className="todo-actions">
        <IconButton
          className="btn btn-icon btn-rounded btn-sm btn-info"
          color="info"
          onClick={() => handleEdit(id)}
        >
          <ModeEditOutline />
        </IconButton>
        <IconButton
          className="btn btn-icon btn-rounded btn-sm btn-danger"
          color="error"
          onClick={() => handleDelete(id)}
        >
          <DeleteOutline />
        </IconButton>
      </div>
    </li>
  );
};
