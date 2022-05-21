import React, { useState, useEffect } from 'react';
import { auth } from './firebase-config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import Login from './components/Login';
import './index.css';
import Home from './components/Home';
import { AuthProvider, useAuth } from './utils/auth';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';

/*
1) DONE Header, MainForm i Footer moraju ići u novi component Home,
a njihov div unutar kojeg se nalaze mora imati className='logged-in'
2) DONE Login i Home componentsi idu u routes, Home kao '/', 
Login kao '/login'
3) DONE Napraviti utils folder i u njega staviti auth.js i RequireAuth.js
4) DONE U auth.js dodati state userLoggedIn koje se mijenja kada se login i logout 
funkcije iz auth.js aktiviraju.
5) DONE Dodati te funkcije u login i logout funkcije u App.js
*/

function App() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [user, setUser] = useState({});
	const uAuth = useAuth();
	const navigate = useNavigate();

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
			navigate('/');
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
			navigate('/');
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		await signOut(auth);
		await uAuth.logoutAuth();
		navigate('/login');
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
