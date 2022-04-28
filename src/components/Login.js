function Login({
	setRegisterEmail,
	setRegisterPassword,
	setLoginEmail,
	setLoginPassword,
	register,
	login,
	registerEmail,
	registerPassword,
	loginEmail,
	loginPassword,
}) {
	return (
		<div className='login-page'>
			<div className='text'>
				<h4>Welcome to the collaborative task manager.</h4>
				<h4>Please register or log in to proceed.</h4>
			</div>
			<div className='login-forms'>
				<div className='login-form-wrapper'>
					<form className='login-form-all' onSubmit={register}>
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
									value={registerEmail}
									onChange={(e) => setRegisterEmail(e.target.value)}
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
									value={registerPassword}
									onChange={(e) => setRegisterPassword(e.target.value)}
								/>
							</div>
							<button className='form-button' type='submit'>
								Register
							</button>
						</div>
					</form>
				</div>

				<div className='login-form-wrapper'>
					<form className='login-form-all' onSubmit={login}>
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
									value={loginEmail}
									onChange={(e) => setLoginEmail(e.target.value)}
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
									value={loginPassword}
									onChange={(e) => setLoginPassword(e.target.value)}
								/>
							</div>
							<button className='form-button'>Log in</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
