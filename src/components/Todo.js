function Todo({ newList }) {
  return (
    <div className="todo-header">
      <h1>My Todo List:</h1>
      <p>Please click done when finished with Task!</p>
      {newList.length ? (
        <p>You have {newList.length} pending task</p>
      ) : (
        <p>You have no pending tasks!!</p>
      )}
    </div>
  );
}
export default Todo;
