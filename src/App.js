import React, { useState, useEffect } from 'react';
import { auth } from './firebase-config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import MainForm from './components/MainForm';
import './index.css';

function App() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const register = async (e) => {
		e.preventDefault();
		// console.log('register clicked');
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (e) => {
		e.preventDefault();
		// console.log('login clicked');
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		// console.log('logout clicked');
		await signOut(auth);
	};

	return (
		<div className='App'>
			{user?.email ? (
				<div className='loggedin'>
					<Header logout={logout} />
					<MainForm />
					<Footer />
				</div>
			) : (
				<Login
					registerEmail={registerEmail}
					registerPassword={registerPassword}
					loginEmail={loginEmail}
					loginPassword={loginPassword}
					user={user}
					setRegisterEmail={setRegisterEmail}
					setRegisterPassword={setRegisterPassword}
					setLoginEmail={setLoginEmail}
					setLoginPassword={setLoginPassword}
					register={register}
					login={login}
					logout={logout}
				/>
			)}
		</div>
	);
}

export default App;
