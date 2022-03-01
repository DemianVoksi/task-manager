import React from 'react'

function ListTasks({ allTasks, toggleDone }) {

  // let allTasks = props.allTasks;
  // let toggleDone = props.ToggleDone;

  return (
    <div className='tasks-container'>
      {allTasks.map((task) => (
        <div key={task.id} className='task-div'>
          <div className='text-info'>
            <p className='para'>{task.taskName}</p>
            <p className='para'>{task.taskTime}</p>
            <p className='para'>{task.done ? "done" : "not done"}</p>
          </div>
          <div className='buttons'>
            <button onClick={toggleDone}>e</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListTasks