import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainForm from './MainForm';
import './Home.css';

function Home() {
	return (
		<div className='logged-in'>
			<Header />
			<MainForm />
			<Footer />
		</div>
	);
}

export default Home;
