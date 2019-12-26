import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.scss';

const Header = () => {
	const [ message, setMessage ] = useState('');

	useEffect(() => {
		axios.get('.netlify/functions/api/').then(({ data: { message } }) => {
			setMessage(message);
		});
	}, []);
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<img src="task-list.svg" className="app-logo" alt="logo" />
				<div className="navbar-item">Yet Another TODO App</div>
				<div>{message}</div>
			</div>
		</nav>
	);
};

export default Header;
