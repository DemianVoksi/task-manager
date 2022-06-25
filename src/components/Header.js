import React from 'react';
import { AuthContext } from '../utils/AuthProvider';
import { auth } from '../utils/firebase-config';
import './Header.css';

function Header() {
	const headerText = 'Oops, I almost forgot';
	const value = React.useContext(AuthContext);

	const handleLogout = async () => {
		await value.logout(auth);
		await value.setIsLoading(true);
		value.setRegisterEmail('');
		value.setRegisterPassword('');
		value.setLoginEmail('');
		value.setLoginPassword('');
	};

	return (
		<div className='header-container'>
			<h1 className='header-main'>{headerText}</h1>
			<button className='form-button' id='logout-button' onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}

export default Header;
