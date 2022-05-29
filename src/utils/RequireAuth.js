import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

function RequireAuth({ children }) {
	const auth = useAuth();

	if (!auth.user) {
		console.log(auth.user);
		return <Navigate to='/login' />;
	}
	return children;
}

export default RequireAuth;