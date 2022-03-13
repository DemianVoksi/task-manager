import React, { useEffect, useState } from 'react';
import ListTasks from './ListTasks';
import { db } from '../firebase-config';
import {
	collection,
	query,
	orderBy,
	getDocs,
	doc,
	addDoc,
	deleteDoc,
	updateDoc,
} from 'firebase/firestore';

function MainForm() {
	const [taskName, setTaskName] = useState('');
	const [taskTime, setTaskTime] = useState('');
	const [taskDone, setTaskDone] = useState(false);
	const [allTasks, setAllTasks] = useState([]);
	const tasksCollectionRef = collection(db, 'tasks');
	const tasksOrdered = query(tasksCollectionRef, orderBy('submitTime'));

	/* ***FETCH ALL TASKS*** */

	const fetchTasks = async () => {
		const data = await getDocs(tasksOrdered);
		setAllTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		console.log(allTasks);
	};

	/* ***GET DATE*** */

	const getDate = () => {
		const currentTime = Date.now();
		return currentTime;
	};

	/* ***SUBMIT ALL TASKS*** */

	const submitNewTask = async (e) => {
		e.preventDefault();
		await addDoc(tasksCollectionRef, {
			taskName: taskName,
			taskTime: taskTime,
			taskDone: taskDone,
			submitTime: getDate(),
		});
		fetchTasks();
		setTaskName('');
		setTaskTime('');
	};

	/* ***USE EFFECT*** */

	useEffect(() => {
		fetchTasks();
		console.log(allTasks);
	}, []);

	/* ***TOGGLE DONE*** */

	const toggleDone = async (id, taskDone) => {
		const taskDoc = doc(db, 'tasks', id);
		const newDone = {
			taskDone: !taskDone,
		};
		await updateDoc(taskDoc, newDone);
		fetchTasks();
	};

	/* ***ON DELETE*** */

	const onDelete = async (id) => {
		const taskDoc = doc(db, 'tasks', id);
		await deleteDoc(taskDoc);
		fetchTasks();
	};

	return (
		<div className='Form-wrapper'>
			<form className='form' name='form' onSubmit={submitNewTask}>
				<div className='enter-task-div'>
					<input
						type='text'
						className='enter-task-input'
						name='enterTask'
						value={taskName}
						placeholder='Enter task'
						onChange={(e) => {
							setTaskName(e.target.value);
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
						value={taskTime}
						onChange={(e) => {
							setTaskTime(e.target.value);
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
			{allTasks && (
				<ListTasks
					allTasks={allTasks}
					toggleDone={toggleDone}
					onDelete={onDelete}
				/>
			)}
		</div>
	);
}

export default MainForm;
