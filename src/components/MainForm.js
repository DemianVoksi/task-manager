import React, { useState } from 'react'
import ListTasks from './ListTasks';

function MainForm() {

  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [allTasks, setAllTasks] = useState();

  function handleSubmit() {
    let taskToSubmit = { task, time };
  }

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='enter-task-div'>
          <label
          className='enter-task-label'
          htmlFor='enterTask'>Enter task: </label>
          <input
          className='enter-task-input'
          name='enterTask'
          value={task}
          placeholder='Enter task'
          onChange={(e) => {setTask(e.target.value)}}
          required />
        </div>
        <div className='enter-time-div'>
          <label
          className='enter-time-label'
          htmlFor='enterTime'>Enter time: </label>
          <input
          className='enter-time-input' 
          name='enterTime'
          placeholder='Enter time'
          value={time}
          onChange={(e) => {setTime(e.target.value)}}
          required />
        </div>
        <div >
          <button type='submit'>Submit task</button>
        </div>
      </form>
      {allTasks && <ListTasks allTasks={allTasks} />}
    </div>
  )
}

export default MainForm