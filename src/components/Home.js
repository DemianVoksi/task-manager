import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainForm from './MainForm';

function Home({ logout, user }) {
	return (
		<div className='logged-in'>
			<Header logout={logout} />
			<MainForm user={user} />
			<Footer />
		</div>
	);
}

export default Home;
