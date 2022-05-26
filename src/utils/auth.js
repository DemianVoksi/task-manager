import { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
