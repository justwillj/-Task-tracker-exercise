import { useState } from "react";
function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      item: "Daily Standup",
    },
    {
      id: 2,
      item: "Code review the last project",
    },
    {
      id: 3,
      item: "Do research about how React works",
    },
    {
      id: 4,
      item: "Create testing files",
    },
    {
      id: 5,
      item: "Ensure software is updated with latest features",
    },
    {
      id: 6,
      item: "Look over the requirements for the next project",
    },
    {
      id: 7,
      item: "Understand and practice more with CSS",
    },
    {
      id: 8,
      item: "Sign up for the next O3",
    },
  ]);

  return (
    <div>
      <ul>
        {tasks.map((item) => (
          <div>
            <button className="btn">+</button>
            <li className="item" key={item.id}>
              {item.item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
