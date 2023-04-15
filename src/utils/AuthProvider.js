import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
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
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from './firebase-config';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	// login/register states
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	//status states
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	// task states
	const [taskName, setTaskName] = useState('');
	const [taskTime, setTaskTime] = useState('');
	const [taskDone, setTaskDone] = useState(false);
	const [allTasks, setAllTasks] = useState([]);

	const tasksCollectionRef = collection(db, 'tasks');
	const tasksOrdered = query(tasksCollectionRef, orderBy('submitTime'));
	const auth = getAuth();

	useEffect(() => {
		setIsLoading(true);
		onAuthStateChanged(auth, (user) => {
			setUser(user);
			fetchTasks();
		});
	}, []);

	const fetchTasks = async () => {
		const data = await getDocs(tasksOrdered);
		setIsLoading(false);
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

	const register = async (registerEmail, registerPassword) => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user.user.email);
			return user;
		} catch (error) {
			setErrorMessage(error);
		}
	};

	const login = async (loginEmail, loginPassword) => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user.user.email);
			return user;
		} catch (error) {
			setErrorMessage(error);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<AuthContext.Provider
			value={{
				registerEmail,
				setRegisterEmail,
				registerPassword,
				setRegisterPassword,
				loginEmail,
				setLoginEmail,
				loginPassword,
				setLoginPassword,
				user,
				setUser,
				taskName,
				setTaskName,
				taskDone,
				setTaskDone,
				taskTime,
				setTaskTime,
				allTasks,
				setAllTasks,
				isLoading,
				setIsLoading,
				submitNewTask,
				toggleDone,
				onDelete,
				fetchTasks,
				register,
				login,
				logout,
				errorMessage
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
