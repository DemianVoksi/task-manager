import React, { useState, useEffect } from 'react';
import { auth } from './utils/firebase-config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import Login from './components/Login';
import './index.css';
import Home from './components/Home';
import { AuthProvider, useAuth } from './utils/AuthProvider';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';

function App() {
	/*
- Transfer all states and functions to AuthProvider
- change values to value.values
*/
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [user, setUser] = useState({});
	const uAuth = useAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const register = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			await uAuth.loginAuth();
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (e) => {
		e.preventDefault();

		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			await uAuth.loginAuth();
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		await signOut(auth);
		await uAuth.logoutAuth();
	};

	return (
		<AuthProvider>
			<Routes>
				<Route
					path='/'
					element={
						<RequireAuth>
							<Home logout={logout} user={user} />
						</RequireAuth>
					}
				></Route>
				<Route
					path='/login'
					element={
						<Login
							registerEmail={registerEmail}
							registerPassword={registerPassword}
							loginEmail={loginEmail}
							loginPassword={loginPassword}
							setRegisterEmail={setRegisterEmail}
							setRegisterPassword={setRegisterPassword}
							setLoginEmail={setLoginEmail}
							setLoginPassword={setLoginPassword}
							register={register}
							login={login}
						/>
					}
				></Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
