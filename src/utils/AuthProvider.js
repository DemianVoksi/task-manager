import { useState, useContext, createContext, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [user, setUser] = useState({});
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

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
			console.log(error);
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
			console.log(error);
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
				register,
				login,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
