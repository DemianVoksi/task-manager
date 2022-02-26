import React, { useState } from 'react'

function MainForm() {

  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [fullTask, setFullTask] = useState();

  function handleSubmit() {
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter task</label>
          <input />
        </div>
        <div>
          <label>Enter time</label>
          <input />
        </div>
        <div>
          <button>Submit task</button>
        </div>
      </form>
    </div>
  )
}

export default MainForm