export const TodoFooter = ({ completed, total }) => {
  return (
    <div className="todo-footer ff-quicksand">
      <span>
        Completed:: <strong>{completed}</strong>
      </span>
      <span>Total:: <strong>{total}</strong></span>
    </div>
  );
};
