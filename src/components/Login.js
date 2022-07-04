import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../utils/AuthProvider';
import './Login.css';

function Login() {
	const value = React.useContext(AuthContext);
	const auth = useAuth();
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		value.setIsLoading(true);
		await auth.register(value.registerEmail, value.registerPassword);
		navigate('/');
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		value.setIsLoading(true);
		await auth.login(value.loginEmail, value.loginPassword);
		navigate('/');
	};

	return (
		<div className="login-page">
			<div className="login-head-text">
				<h4>Welcome to the collaborative task manager.</h4>
				<h4>Please register or log in to proceed.</h4>
			</div>
			<div className="login-forms">
				<div className="login-form-wrapper">
					<form className="login-form-all" onSubmit={handleRegister}>
						<div className="login-form-one">
							<p>Register</p>
							<div className="form-email-wrapper">
								<label className="form-label-email" htmlFor="register-email">
									Email:{' '}
								</label>
								<input
									className="form-input-email"
									type="email"
									name="register-email"
									placeholder="Enter email..."
									minLength={7}
									maxLength={50}
									required
									value={value.registerEmail}
									onChange={(e) => value.setRegisterEmail(e.target.value)}
								/>
							</div>
							<div className="form-password-wrapper">
								<label
									className="form-label-password"
									htmlFor="register-password"
								>
									Password:{' '}
								</label>
								<input
									className="form-input-password"
									type="password"
									name="register-password"
									placeholder="Enter password..."
									value={value.registerPassword}
									onChange={(e) => value.setRegisterPassword(e.target.value)}
								/>
							</div>
							<div className="button-container">
								<button className="form-button" type="submit">
									Register
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="login-form-wrapper">
					<form className="login-form-all" onSubmit={handleLogin}>
						<div className="login-form-one">
							<p>Log in</p>
							<div className="form-email-wrapper">
								<label className="form-label-email" htmlFor="login-email">
									Email:{' '}
								</label>
								<input
									className="form-input-email"
									type="email"
									name="login-email"
									placeholder="Enter email..."
									minLength={7}
									maxLength={50}
									required
									value={value.loginEmail}
									onChange={(e) => value.setLoginEmail(e.target.value)}
								/>
							</div>
							<div className="form-password-wrapper">
								<label className="form-label-password" htmlFor="login-password">
									Password:{' '}
								</label>
								<input
									className="form-input-password"
									type="password"
									name="login-password"
									placeholder="Enter password..."
									value={value.loginPassword}
									onChange={(e) => value.setLoginPassword(e.target.value)}
								/>
							</div>

							<ErrorInfo>
								{!!value.errorMessage ? (
									<p>{formatFirebaseError(value.errorMessage.code)}</p>
								) : null}
							</ErrorInfo>

							<div className="button-container">
								<button className="form-button">Log in</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

function formatFirebaseError(code) {
	switch (code) {
		case 'auth/wrong-password':
			return 'Invalid password provided';
		case 'auth/user-not-found':
			return "User doesn't exist!";
	}

	return `Unknown error (${code})`;
}

function ErrorInfo(props) {
	return (
		<section className="error-field" style={{ color: 'red' }}>
			{props.children}
		</section>
	);
}

export default Login;
