import React from 'react';
import { useNavigate } from 'react-router-dom';
import './loginAndRegister.css';

export const LoginAndRegister = () => {
	const navigate = useNavigate();

	return (
		<div className='login-and-register-wrapper'>
			<div className='prompt-wrapper'>
				<button
					className='login-register-button'
					onClick={() => navigate('/login')}
				>
					login
				</button>
				<p>or</p>
				<button
					className='login-register-button'
					onClick={() => navigate('/register')}
				>
					register
				</button>
				<p>to continue</p>
			</div>
		</div>
	);
};
