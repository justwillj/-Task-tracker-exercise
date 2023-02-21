function Todo({ todoList }) {
  return (
    <div className="todo-header">
      <h1>My Todo List:</h1>
      <p>Please click delete when finished with Task!</p>
      {todoList.length ? (
        <p>You have {todoList.length} pending task</p>
      ) : (
        <p>You have no pending tasks!</p>
      )}
    </div>
  );
}
export default Todo;
