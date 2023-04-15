import React from 'react';
import { AuthContext } from '../utils/AuthProvider';
import Footer from './Footer';
import Header from './Header';
import './Home.css';
import Loading from './Loading';
import MainForm from './MainForm';

function Home() {
	const value = React.useContext(AuthContext);

	if (value.isLoading) {
		return <Loading />;
	} else {
		return (
			<div className='logged-in'>
				<Header />
				<MainForm />
				<Footer />
			</div>
		);
	}

	// return value.isLoading ? (
	// 	<Loading />
	// ) : (
	// 	<div className='logged-in'>
	// 		<Header />
	// 		<MainForm />
	// 		<Footer />
	// 	</div>
	// );
}

export default Home;
