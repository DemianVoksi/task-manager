import { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null); // needs to be exported

export const AuthProvider = ({ children }) => {
	/*
	- Transfer all login/logut/register/useEffect functions from App.js here
	- add them to value in AuthContext.Provider
	*/
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const navigate = useNavigate();

	const loginAuth = () => {
		setUserLoggedIn(true);
		navigate('/');
	};

	const logoutAuth = () => {
		setUserLoggedIn(false);
		navigate('/login');
	};

	return (
		<AuthContext.Provider
			value={{ userLoggedIn, setUserLoggedIn, loginAuth, logoutAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
