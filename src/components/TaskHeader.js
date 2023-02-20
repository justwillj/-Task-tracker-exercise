import { useState } from "react";
function TaskHeader() {
  return (
    <div className="add-task">
      <h1>Tasks to do:</h1>
      <input type="text" placeholder="Please enter new task!"></input>
      <button>Add</button>
      <p>Please pick a task!</p>
    </div>
  );
}
export default TaskHeader;
