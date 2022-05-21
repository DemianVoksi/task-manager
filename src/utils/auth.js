import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	const loginAuth = () => {
		setUserLoggedIn(true);
	};

	const logoutAuth = () => {
		setUserLoggedIn(false);
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
