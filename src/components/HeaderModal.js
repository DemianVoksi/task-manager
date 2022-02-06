import { useState } from "react";


const HeaderModal = () => {

  const [modal, setModal] = useState(false);

  let toggleModal = () => {
    setModal(!modal);
  }

  return ( 
    <div className='HeaderModal'>
      <button 
      className="btn" 
      id="add-task" 
      title="Add task"
      onClick={toggleModal}
      >+</button>
    </div>
   );
  }
export default HeaderModal;

/*
<button classname="btn" id="delete-task" title="Delete task"></button>
<button className="btn" id="task-done" title="Task done"></button>
<button className="btn" id="edit-task" title="Edit task"></button>
*/