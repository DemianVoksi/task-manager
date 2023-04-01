import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	updateDoc
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../utils/AuthProvider';
import { db } from '../utils/firebase-config';
import ListTasks from './ListTasks';
import './MainForm.css';

// require fields
// types to be email and password
// set maximum and minimum length
// reset values after submitting
// edit css for the single task
// edit css generally to make it more responsive

function MainForm() {
	const [taskName, setTaskName] = useState('');
	const [taskTime, setTaskTime] = useState('');
	const [taskDone, setTaskDone] = useState(false);
	const [allTasks, setAllTasks] = useState([]);
	const tasksCollectionRef = collection(db, 'tasks');
	const tasksOrdered = query(tasksCollectionRef, orderBy('submitTime'));
	const value = React.useContext(AuthContext);
	let user = value.user;

	const fetchTasks = async () => {
		const data = await getDocs(tasksOrdered);
		value.setIsLoading(false);
		setAllTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};

	const getDate = () => {
		const currentTime = Date.now();
		return currentTime;
	};

	const submitNewTask = async (e) => {
		e.preventDefault();
		await addDoc(tasksCollectionRef, {
			allParticipants: [],
			taskAuthor: user.email,
			taskName: taskName,
			taskTime: taskTime,
			taskDone: taskDone,
			submitTime: getDate()
		});
		fetchTasks();
		setTaskName('');
		setTaskTime('');
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const toggleDone = async (id, taskDone) => {
		const taskDoc = doc(db, 'tasks', id);
		const newDone = {
			taskDone: !taskDone
		};
		await updateDoc(taskDoc, newDone);
		fetchTasks();
	};

	const onDelete = async (id) => {
		const taskDoc = doc(db, 'tasks', id);
		await deleteDoc(taskDoc);
		fetchTasks();
	};

	return (
		<div className='form-wrapper'>
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
					fetchTasks={fetchTasks}
					user={user}
				/>
			)}
		</div>
	);
}

export default MainForm;
