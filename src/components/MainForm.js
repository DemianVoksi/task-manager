import React from 'react';
import { AuthContext } from '../utils/AuthProvider';
import ListTasks from './ListTasks';
import './MainForm.css';

function MainForm() {
	const value = React.useContext(AuthContext);
	let user = value.user;

	return (
		<div className='form-wrapper'>
			<form
				className='form'
				name='form'
				onSubmit={(e) => value.submitNewTask(e)}
			>
				<div className='enter-task-div'>
					<input
						type='text'
						className='enter-task-input'
						name='enterTask'
						value={value.taskName}
						placeholder='Enter task'
						onChange={(e) => {
							value.setTaskName(e.target.value);
						}}
						required
					/>
				</div>
				<div className='enter-time-div'>
					<input
						type='text'
						className='enter-time-input'
						name='enterTime'
						placeholder='Enter time'
						value={value.taskTime}
						onChange={(e) => {
							value.setTaskTime(e.target.value);
						}}
						required
					/>
				</div>
				<div className='btn-div'>
					<button type='submit' className='btn'>
						Remind me
					</button>
				</div>
			</form>
			{value.allTasks && (
				<ListTasks
					allTasks={value.allTasks}
					toggleDone={value.toggleDone}
					onDelete={value.onDelete}
					fetchTasks={value.fetchTasks}
					user={user}
				/>
			)}
		</div>
	);
}

export default MainForm;
