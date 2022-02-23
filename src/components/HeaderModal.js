import { useEffect, useState } from "react";


const HeaderModal = () => {


  return ( 
    <div className='HeaderModal'>
      <button 
      className="btn" 
      id="add-task" 
      title="Add task"
      onClick={toggleModal}
      >+</button>

      {modal && (
        <div className="modal">
          <div className="modal-overlay"
          onClick={toggleModal}></div>
          <div className="modal-content">
            <form 
            onSubmit={handleSubmit}
            className='formDiv'>
              <div className="task-name-div">
                <label 
                htmlFor="task-name" 
                className="task-name-label">Task name: </label>
                <input 
                type="text"
                name="task-name"
                className="task-name-input"
                required
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}/>
              </div>

              <div className="task-time-div">
                <label
                htmlFor="task-time"
                className="task-time-label">Task time: </label>
                <input
                type="text"
                name="task-time"
                className="task-time-input"
                required
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}/>
              </div>

              <button className="task-submit-btn">Submit task</button> 
            </form>
          </div>
        </div>
      )}
    </div>
   );
  }
export default HeaderModal;
