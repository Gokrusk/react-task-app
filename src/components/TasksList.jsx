import React, { useState } from 'react';
import { TaskForm } from './TaskForm';
import { Task } from './Task';
import '../styles/Task.css';
import '../styles/TaskForm.css';
import '../styles/TaskList.css';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      tasks.text = task.text.trim();
      const updatedTasks = [task, ...tasks]; //adding at the begining
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const doneTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-cont'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            doneTask={doneTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};
