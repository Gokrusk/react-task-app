import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const TaskForm = (props) => {
  const [input, setInput] = useState('')

  const manageChanges = e =>{
    setInput(e.target.value)
  }

  const manageDelivey = e =>{
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    }
    props.onSubmit(newTask)
  }
  return (
    <form 
      className='task-form'
      onSubmit={manageDelivey}
    >
      <input 
        className='task-input' 
        type='text'
        placeholder='Write a task' 
        name='text'
        onChange={manageChanges}
      />
      <button 
        className='button-task'
      >
        Add Task
      </button>
    </form>
  );
};
