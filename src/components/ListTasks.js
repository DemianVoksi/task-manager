import Task from './Task';

function ListTasks({ fetchTasks, allTasks, toggleDone, onDelete, user }) {
	// vidjeti radi li filter za taskAuthora
	// dodati filter za taskParticipanta
	// vidjeti može li se sve to preko getDoca
	return (
		<div className='tasks-container'>
			{allTasks
				.filter((task) => task.taskAuthor === user.email)
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
