const Task = ({tasks}) => {
  return ( 
    <div className="task-container">
      {tasks.map(task => (
        <div key={task.id} className="task">
          <div className="task-data">
            <p>{task.taskName}</p>
            <p>{task.taskTime}</p>
            <p>{task.taskDone}</p>
          </div>
          <div className="task-buttons">
            <button className="btn" id="edit-task" title="Edit task"></button>
            <button className="btn" id="task-done" title="Task done"></button>
            <button className="btn" id="delete-task" title="Delete task"></button>
          </div>
        </div>        
      ))}
    </div> );
}
 
export default Task;