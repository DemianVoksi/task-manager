import React from 'react';

// stavi cijeli <div className='participant'> u novi component

function ListTasks({
	allTasks,
	toggleDone,
	onDelete,
	taskParticipant,
	setTaskParticipant,
	addTaskParticipant,
}) {
	return (
		<div className='tasks-container'>
			{allTasks.map((task) => (
				<div key={task.id} className='task-div'>
					<div className='text-info'>
						<p className='para'>Task: {task.taskName}</p>
						<p className='para'>Time: {task.taskTime}</p>
					</div>
					<div className='buttons'>
						<button
							className='done-button'
							onClick={() => toggleDone(task.id, task.taskDone)}
							style={
								task.taskDone
									? { backgroundColor: '#028a0f' }
									: { backgroundColor: '#00264d' }
							}
						>
							done
						</button>
						<button className='delete-button' onClick={() => onDelete(task.id)}>
							delete
						</button>
					</div>
					<div className='participant'>
						<form
							className='participant-form'
							onSubmit={() => addTaskParticipant(task.id, task.taskParticipant)}
						>
							<input
								type='text'
								name='addParticipant'
								className='participant-input'
								value={taskParticipant}
								onChange={(e) => {
									setTaskParticipant(e.target.value);
								}}
								placeholder='Add a task participant...'
							/>
							<button type='submit' className='btn'>
								Add participant
							</button>
						</form>
						<div>All participants: {task.allParticipants}</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ListTasks;
