import React, { useEffect, useState } from 'react';
import ListTasks from './ListTasks';
import { db } from '../firebase-config';
import {
	collection,
	query,
	orderBy,
	getDocs,
	getDoc,
	doc,
	addDoc,
	deleteDoc,
	updateDoc,
} from 'firebase/firestore';

function MainForm() {
	const [taskName, setTaskName] = useState('');
	const [taskTime, setTaskTime] = useState('');
	const [taskDone, setTaskDone] = useState(false);
	// const [submitTime, setSubmitTime] = useState(0);
	const [allTasks, setAllTasks] = useState([]); // YOU COMPLETELY FORGOT THIS
	const tasksCollectionRef = collection(db, 'tasks');
	const tasksOrdered = query(tasksCollectionRef, orderBy('submitTime'));

	/* ***FETCH ALL TASKS*** CHANGED*/

	// const fetchTasks = async () => {
	// 	let tasksFromServer = await fetch('http://localhost:8000/tasks');
	// 	let data = await tasksFromServer.json();
	// 	return data;
	// };

	const fetchTasks = async () => {
		const data = await getDocs(tasksOrdered);
		setAllTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};

	/* ***FETCH SINGLE TASK*** CHANGED*/

	// const fetchTask = async (id) => {
	// 	const taskFromServer = await fetch(`http://localhost:8000/tasks/${id}`);
	// 	const data = await taskFromServer.json();
	// 	return data;
	// };

	// const fetchTask = async (id) => {
	// 	const docRef = doc(db, 'tasks', id);
	// 	const docSnap = await getDoc(docRef);
	// 	return docSnap;
	// };

	/* ***SUBMIT ALL TASKS*** CHANGED*/

	// async function submitToServer(e) {
	// 	e.preventDefault();

	// 	let taskToSubmit = { taskName, taskTime, taskDone };
	// 	let parameters = {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		mode: 'cors',
	// 		body: JSON.stringify(taskToSubmit),
	// 	};

	// 	const submitting = await fetch('http://localhost:8000/tasks', parameters);
	// 	const data = await submitting.json();
	// 	setAllTasks([...allTasks, data]);
	// 	setTaskName('');
	// 	setTaskTime('');
	// }

	const submitNewTask = async (e) => {
		e.preventDefault();
		await addDoc(tasksCollectionRef, {
			taskName: taskName,
			taskTime: taskTime,
			taskDone: taskDone,
			submitTime: getDate(),
		});
		fetchTasks();
	};

	/* ***GET DATE*** FINISHED*/

	const getDate = () => {
		const currentTime = Date.now();
		return currentTime;
	};

	/* ***USE EFFECT*** CHANGED*/

	// useEffect(() => {
	// 	const fromServer = async () => {
	// 		const tasksFromServer = await fetchTasks();
	// 		setAllTasks(tasksFromServer);
	// 	};

	// 	fromServer();
	// }, []);

	useEffect(() => {
		fetchTasks();
		console.log(allTasks);
	}, []);

	/* ***TOGGLE DONE*** */

	// const toggleDone = async (id) => {
	// 	const toChange = await fetchTask(id);
	// 	const updated = { ...toChange, taskDone: !toChange.taskDone };

	// 	const resolve = await fetch(`http://localhost:8000/tasks/${id}`, {
	// 		method: 'PUT',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(updated),
	// 	});

	// 	let data = await resolve.json();

	// 	setAllTasks(
	// 		allTasks.map((item) =>
	// 			item.id === id ? { ...item, taskDone: data.taskDone } : item
	// 		)
	// 	);
	// };

	const toggleDone = async (id) => {
		// buggy, when clicking on the task for the first time, it needs 2 clicks to change
		const taskDoc = doc(db, 'tasks', id);
		const newDone = {
			taskDone: !taskDone,
		};
		setTaskDone(!taskDone);
		await updateDoc(taskDoc, newDone);
		fetchTasks();
	};

	/* ***ON DELETE*** */

	// const onDelete = async (id) => {
	// 	const resolve = await fetch(`http://localhost:8000/tasks/${id}`, {
	// 		method: 'DELETE',
	// 	});

	// 	resolve.status === 200
	// 		? setAllTasks(allTasks.filter((task) => task.id !== id))
	// 		: alert('Error');
	// };

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
