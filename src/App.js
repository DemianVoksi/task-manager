import React from 'react';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import { AuthProvider } from './utils/AuthProvider';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route
					path='/'
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				></Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
