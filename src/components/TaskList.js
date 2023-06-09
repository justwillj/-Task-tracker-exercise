import { useState } from "react";
import TaskHeader from "./TaskHeader";
import Todo from "./Todo";
function TaskList() {
  const [todoList, setTodoList] = useState([]);
  //Link that helped me with understanding list and keys better
  //https://www.youtube.com/watch?v=Fcj6DQT3nVA
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

  /**
   * Allows the user to click on a Task and add it to there Todo list
   * @param {string} task - The task the user wants to put into there Todo list
   */
  const addTask = (task) => (e) => {
    setTodoList([...todoList, task]);
    todoList.push(task);
  };

  //  Link that helped me with how to remove a task when the user clicks on a button
  //  https://www.robinwieruch.de/react-remove-item-from-list/
  /**
   * Allows the user to click the delete button which then removes the task off there Todo list
   * @param {number} taskIndex - The index of the task they want to delete
   */
  const deleteTask = (taskIndex) => (e) => {
    const listOfTask = todoList.filter((task, index) => index !== taskIndex);
    setTodoList(listOfTask);
  };

  return (
    <div className="tasks">
      <div className="task-list">
        <TaskHeader setTasks={setTasks} />
        <ul>
          {tasks.map((task) => (
            <div key={task.id}>
              <button className="btn" onClick={addTask(task.task)}>
                +
              </button>
              <li className="item">{task.task}</li>
            </div>
          ))}
        </ul>
      </div>

      <div className="todo">
        <Todo todoList={todoList} />
        <ul>
          {todoList.map((todo, index) => (
            <div key={index.toString()}>
              <button className="completed-btn" onClick={deleteTask(index)}>
                Delete
              </button>
              <li className="item">{todo}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TaskList;
