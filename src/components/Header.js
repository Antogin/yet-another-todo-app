import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<img src="task-list.svg" className="app-logo" alt="logo" />
				<div className="navbar-item">Yet Another TODO App</div>
			</div>
		</nav>
	);
};

export default Header;
