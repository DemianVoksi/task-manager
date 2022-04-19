import React, { useState } from 'react';

function Login() {
	// const [registerEmail, setRegisterEmail] = useState('');
	// const [registerPassword, setRegisterPassword] = useState('');
	// const [loginEmail, setLoginEmail] = useState('');
	// const [loginPassword, setLoginPassword] = useState('');
	// const [user, setUser] = useState({});

	return (
		<div className='login-page'>
			<div className='text'>
				<h4>Welcome to the collaborative task manager.</h4>
				<h4>Please register or log in to proceed.</h4>
			</div>
			<div className='login-forms'>
				<div className='login-form-wrapper'>
					<form className='login-form-all'>
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
								/>
							</div>
							<button className='form-button' type='submit'>
								Register
							</button>
						</div>
					</form>
				</div>

				<div className='login-form-wrapper'>
					<form className='login-form-all'>
						<div className='login-form-one'>
							<p>Log in</p>
							<div className='form-email-wrapper'>
								<label className='form-label-email' htmlFor='login-email'>
									Email:{' '}
								</label>
								<input
									className='form-input-email'
									type='email'
									name='login-email'
									placeholder='Enter email...'
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
								/>
							</div>
							<button className='form-button' type='submit'>
								Log in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
