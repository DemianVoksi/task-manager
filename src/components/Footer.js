import React from 'react';
import './Footer.css';

function Footer() {
	let footerText = 'Created by Demian Vokši, 2022';

	return (
		<div className='footer-container'>
			<p className='footer-text'>{footerText}</p>
		</div>
	);
}

export default Footer;
