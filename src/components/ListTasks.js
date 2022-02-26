import React from 'react'

function ListTasks(props) {

  let allTasks = props.allTasks;
  
  return (
    <div>
      {allTasks.map((task) => (
        <div key={task.id}>
          <p>{task.taskName}</p>
          <p>{task.taskTime}</p>
        </div>
      ))}
    </div>
  )
}

export default ListTasks