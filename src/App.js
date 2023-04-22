import React from 'react';
// import Login from './components/Login';
import './App.css';
// import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { LoginAndRegister } from './components/LoginAndRegister';
import { Register } from './components/Register';
import { AuthProvider } from './utils/AuthProvider';

// import { Route, Routes, Navigate } from 'react-router-dom';
// import RequireAuth from './utils/RequireAuth';
// import Loading from './components/Loading';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/login-register' element={<LoginAndRegister />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				{/* <Route
					path='/task-manager'
					element={<Navigate replace to='/login' />}
				/>
				<Route
					path='/'
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/loading' element={<Loading />}></Route> */}
			</Routes>
		</AuthProvider>
	);
}

export default App;
