import React from 'react';

function Header({ logout }) {
	const headerText = 'Oops, I almost forgot';

	return (
		<div className='Header-container'>
			<h1 className='header'>{headerText}</h1>
			<button className='form-button' onClick={logout}>
				Logout
			</button>
		</div>
	);
}

export default Header;
