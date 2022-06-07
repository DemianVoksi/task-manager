import Task from './Task';
import './ListTasks.css';

function ListTasks({ fetchTasks, allTasks, toggleDone, onDelete, user }) {
	return (
		<div className='tasks-container'>
			{allTasks
				.filter(
					(task) =>
						task.taskAuthor === user.email ||
						task.allParticipants.includes(user.email)
				)
				.map((task) => (
					<div key={task.id}>
						<Task
							task={task}
							fetchTasks={fetchTasks}
							toggleDone={toggleDone}
							onDelete={onDelete}
						/>
					</div>
				))}
		</div>
	);
}

export default ListTasks;
