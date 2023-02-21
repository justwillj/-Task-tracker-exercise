import { useState } from "react";
function TaskHeader({ setTasks }) {
  const [newTask, setNewTask] = useState("");

  /**
   * Allows the user to add more Tasks to the Task list
   */
  const addTask = () => {
    //Link that helped me with this
    //https://www.robinwieruch.de/react-add-item-to-list/
    const task = {
      id: Math.floor(Math.random() * 1000),
      task: newTask,
    };
    setTasks((oldList) => [...oldList, task]);
    setNewTask("");
  };

  /**
   * Set the input back to blank once the user clicks on the add button
   * @param {click} event
   */
  const setInputBlank = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div className="add-task">
      <h1>Tasks to do:</h1>
      <input
        type="text"
        placeholder="Please enter new task!"
        value={newTask}
        onChange={setInputBlank}
      ></input>
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <p>Please pick a task!</p>
    </div>
  );
}
export default TaskHeader;
