import { useEffect, useState } from "react";

const Tasks = () => {

  return ( 
    <div className="MainBody">
      { tasks && <Task tasks={tasks} />}
    </div>
   );
}
 
export default Tasks;