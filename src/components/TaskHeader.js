import { useState } from "react";
function TaskHeader({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    //Link that helped me with this
    //https://www.robinwieruch.de/react-add-item-to-list/
    const task = tasks.concat({
      id: Math.floor(Math.random() * 10000),
      task: newTask,
    });
    setTasks((oldList) => [...oldList, task]);
    setNewTask("");
  };
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
