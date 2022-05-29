import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainForm from './MainForm';

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
