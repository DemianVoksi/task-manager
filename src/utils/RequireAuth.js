import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

// all should be fine here, if not, import AuthContext

function RequireAuth({ children }) {
	const auth = useAuth();
	if (!auth.currentUser) {
		return <Navigate to='/login' />;
	}
	return children;
}

export default RequireAuth;
