import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../utils/AuthProvider';
import './Login.css';

export const Login = () => {
	const value = React.useContext(AuthContext);
	const auth = useAuth();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		value.setIsLoading(true);
		await auth.login(value.loginEmail, value.loginPassword);
		navigate('/');
	};

	return (
		<div className='login-form-wrapper'>
			<form className='login-form-all' onSubmit={handleLogin}>
				<p className='login-title'>Log in</p>
				<div className='form-email-wrapper'>
					<label className='form-label-email' htmlFor='login-email'>
						Email:{' '}
					</label>
					<input
						className='form-input-email'
						type='email'
						name='login-email'
						placeholder='Enter email...'
						minLength={7}
						maxLength={50}
						required
						value={value.loginEmail}
						onChange={(e) => value.setLoginEmail(e.target.value)}
					/>
				</div>
				<div className='form-password-wrapper'>
					<label className='form-label-password' htmlFor='login-password'>
						Password:{' '}
					</label>
					<input
						className='form-input-password'
						type='password'
						name='login-password'
						placeholder='Enter password...'
						value={value.loginPassword}
						onChange={(e) => value.setLoginPassword(e.target.value)}
					/>
				</div>
				<div className='button-container'>
					<button className='form-button'>Log in</button>
				</div>
			</form>
		</div>
	);
};
