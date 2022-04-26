import Task from './Task';

function ListTasks({ fetchTasks, allTasks, toggleDone, onDelete }) {
	return (
		<div className='tasks-container'>
			{allTasks.map((task) => (
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
