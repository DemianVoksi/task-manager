import { useState } from "react";
import Modal from "./Modal";

const Header = () => {

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  }

  return ( 
    <div className='Header'>
      <button 
      className="btn" 
      id="add-task" 
      title="Add task"
      onClick={showModal}>+</button>

      <Modal modal={modal} setModal={setModal} />
    </div>
   );
}
 
export default Header;

/*
<button classname="btn" id="delete-task" title="Delete task"></button>
<button className="btn" id="task-done" title="Task done"></button>
<button className="btn" id="edit-task" title="Edit task"></button>
*/