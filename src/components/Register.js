import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../utils/AuthProvider';
import './Login.css';

export const Register = () => {
	const value = React.useContext(AuthContext);
	const auth = useAuth();
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		value.setIsLoading(true);
		await auth.register(value.registerEmail, value.registerPassword);
		navigate('/');
	};

	return (
		<div className='login-forms'>
			<div className='login-form-wrapper'>
				<form className='login-form-all' onSubmit={handleRegister}>
					<div className='login-form-one'>
						<p>Register</p>
						<div className='form-email-wrapper'>
							<label className='form-label-email' htmlFor='register-email'>
								Email:{' '}
							</label>
							<input
								className='form-input-email'
								type='email'
								name='register-email'
								placeholder='Enter email...'
								minLength={7}
								maxLength={50}
								required
								value={value.registerEmail}
								onChange={(e) => value.setRegisterEmail(e.target.value)}
							/>
						</div>
						<div className='form-password-wrapper'>
							<label
								className='form-label-password'
								htmlFor='register-password'
							>
								Password:{' '}
							</label>
							<input
								className='form-input-password'
								type='password'
								name='register-password'
								placeholder='Enter password...'
								value={value.registerPassword}
								onChange={(e) => value.setRegisterPassword(e.target.value)}
							/>
						</div>
						<div className='button-container'>
							<button className='form-button' type='submit'>
								Register
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
