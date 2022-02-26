import React from 'react'

function ListTasks(props) {

  let allTasks = props.allTasks;
  
  return (
    <div>
      {allTasks.map((task) => (
        <div key={task.id}>
          <p>{task.taskName} {task.taskTime} {task.done ? "done" : "not done"}</p>
        </div>
      ))}
    </div>
  )
}

export default ListTasks