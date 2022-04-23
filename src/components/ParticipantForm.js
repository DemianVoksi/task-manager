import React from 'react';

function ParticipantForm() {
	return (
		<div className='participant'>
			<form
				className='participant-form'
				onSubmit={() => addTaskParticipant(task.id, taskParticipant)}
			>
				<input
					type='text'
					name='addParticipant'
					className='participant-input'
					value={taskParticipant}
					onChange={(e) => setTaskParticipant(e.target.value)}
					placeholder='Add a task participant...'
				/>
				<button type='submit' className='btn'>
					Add participant
				</button>
			</form>
			<div>All participants: {task.allParticipants}</div>
		</div>
	);
}

export default ParticipantForm;
