export const TodoHeader = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('todo');
    console.log(input.value);
  }

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
          />
        </div>
      </form>
    </div>
  );
};
