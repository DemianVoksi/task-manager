import React, { useState } from 'react';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

function Task({ task, fetchTasks, toggleDone, onDelete }) {
	const [taskParticipant, setTaskParticipant] = useState('');

	const addTaskParticipant = async (e) => {
		e.preventDefault();
		const participantRef = doc(db, 'tasks', task.id);
		await updateDoc(participantRef, {
			allParticipants: arrayUnion(taskParticipant),
		});
		fetchTasks();
	};

	return (
		<div className='task-div'>
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
				<form className='participant-form' onSubmit={addTaskParticipant}>
					<input
						type='text'
						name='addParticipant'
						className='participant-input'
						value={taskParticipant}
						onChange={(e) => {
							setTaskParticipant(e.target.value);
						}}
						placeholder='Enter participant email...'
					/>
					<button type='submit' className='btn'>
						Add participant
					</button>
				</form>
				<div>All participants: {task.allParticipants}</div>
			</div>
		</div>
	);
}

export default Task;