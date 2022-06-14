import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainForm from './MainForm';
import './Home.css';
import { AuthContext } from '../utils/AuthProvider';
import Loading from './Loading';

function Home() {
	const value = React.useContext(AuthContext);

	return value.isLoading ? (
		<Loading />
	) : (
		<div className='logged-in'>
			<Header />
			<MainForm />
			<Footer />
		</div>
	);
}

export default Home;
