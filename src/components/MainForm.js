import React, { useEffect, useState } from 'react'
import ListTasks from './ListTasks';

function MainForm() {

  const [taskName, setTask] = useState('');
  const [taskTime, setTime] = useState('');
  const [taskDone, setDone] = useState(false);
  const [allTasks, setAllTasks] = useState([]);


  async function submitToServer(e) {
    
    e.preventDefault()

    let taskToSubmit = { taskName, taskTime, taskDone };

    let parameters = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(taskToSubmit)
    }

    const submitting = await fetch('http://localhost:8000/tasks', parameters);
    const data = await submitting.json()
    setAllTasks([...allTasks, data])

  }

  const pullFromServer = async() => {
    
    let tasksFromServer = await fetch('http://localhost:8000/tasks');
    let data = await tasksFromServer.json()

    return data;
  }


  useEffect(() => {
    const fromServer = async () => {
      const tasksFromServer = await pullFromServer()
      setAllTasks(tasksFromServer)
    }

    fromServer()
  }, [])


  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={submitToServer}>
        <div className='enter-task-div'>
          <label
          className='enter-task-label'
          htmlFor='enterTask'>Enter task: </label>
          <input
          type='text'
          className='enter-task-input'
          name='enterTask'
          value={taskName}
          placeholder='Enter task'
          onChange={(e) => {setTask(e.target.value)}}
          required />
        </div>
        <div className='enter-time-div'>
          <label
          className='enter-time-label'
          htmlFor='enterTime'>Enter time: </label>
          <input
          type='text'
          className='enter-time-input' 
          name='enterTime'
          placeholder='Enter time'
          value={taskTime}
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