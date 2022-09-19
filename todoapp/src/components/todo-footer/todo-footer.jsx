export const TodoFooter = ({ completed, total }) => {
  return (
    <div className="todo-footer ff-quicksand">
      <span>Completed:: {completed}</span>
      <span>Total:: {total}</span>
    </div>
  );
};
