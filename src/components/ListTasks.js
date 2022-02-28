import React from 'react'

function ListTasks(props) {

  let allTasks = props.allTasks;
  
  return (
    <div className='tasks-container'>
      {allTasks.map((task) => (
        <div key={task.id} className='task-div'>
          <p className='para'>{task.taskName}</p>
          <p className='para'>{task.taskTime}</p>
          <p className='para'>{task.done ? "done" : "not done"}</p>
        </div>
      ))}
    </div>
  )
}

export default ListTasks