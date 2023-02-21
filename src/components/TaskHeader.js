import { useState } from "react";
function TaskHeader({ setTasks }) {
  const [newTask, setNewTask] = useState("");

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
      <button onClick={addTask}>Add</button>
      <p>Please pick a task!</p>
    </div>
  );
}
export default TaskHeader;
