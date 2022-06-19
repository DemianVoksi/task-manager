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
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
			setIsLoading(false);
			console.log(isLoading);
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
		// setIsLoading(true);
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
				logout,
				errorMessage,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
