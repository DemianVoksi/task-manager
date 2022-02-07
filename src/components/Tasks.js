import { useEffect, useState } from "react";
import Task from "../Task";

const Tasks = () => {

  let [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/tasks')
    .then(resp => {
      return resp.json();
    })
    .then((data) => {
      setTasks(data);
    })
  }, [])

  return ( 
    <div className="MainBody">
      { tasks && <Task tasks={tasks} />}
    </div>
   );
}
 
export default Tasks;