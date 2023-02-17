import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Task = ({ id, text, done, doneTask, deleteTask }) => {
  return (
    <div className={done ? 'task-cont done' : 'task-cont'}>
      <div className='task-text' onClick={() => doneTask(id)}>
        {text}
      </div>
      <div className='task-icon-cont' onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
};
