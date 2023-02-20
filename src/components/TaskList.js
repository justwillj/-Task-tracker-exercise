import { useState } from "react";
function TaskList() {
  const [todoList, setTodoList] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Daily Standup",
    },
    {
      id: 2,
      task: "Code review the last project",
    },
    {
      id: 3,
      task: "Do research about how React works",
    },
    {
      id: 4,
      task: "Create testing files",
    },
    {
      id: 5,
      task: "Ensure software is updated with latest features",
    },
    {
      id: 6,
      task: "Look over the requirements for the next project",
    },
    {
      id: 7,
      task: "Understand and practice more with CSS",
    },
    {
      id: 8,
      task: "Sign up for the next O3",
    },
  ]);

  const addTask = (task) => (e) => {
    setTodoList([...todoList, task]);
    todoList.push(task);
  };

  return (
    <div className="tasks">
      <div className="task-list">
        <ul>
          {tasks.map((task) => (
            <div>
              <button className="btn" onClick={addTask(task.task)}>
                +
              </button>
              <li className="item" key={task.id}>
                {task.task}
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="todo">
        <ul>
          {todoList.map((todo, index) => (
            <div>
              <button className="completed-btn">Delete</button>
              <li className="item" key={index.toString()}>
                {todo}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TaskList;
