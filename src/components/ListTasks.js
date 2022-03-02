import React from 'react'

function ListTasks({ allTasks, toggleDone, onDelete }) {

  // let allTasks = props.allTasks;
  // let toggleDone = props.ToggleDone;

  return (
    <div className='tasks-container'>
      {allTasks.map((task) => (
        <div key={task.id} className='task-div'>
          <div className='text-info'>
            <p className='para'>{task.taskName}</p>
            <p className='para'>{task.taskTime}</p>
            <p className='para'>{task.taskDone ? "done" : "not done"}</p>
          </div>
          <div className='buttons'>
            <button 
            className='done-button' 
            onClick={() => toggleDone(task.id)}
            style={task.taskDone ? {backgroundColor: '#028a0f'} : {backgroundColor: '#00264d' }}>done</button>
            <button
            className='delete-button'
            onClick={() => onDelete(task.id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListTasks