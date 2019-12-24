import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { bg } = isLightTheme ? light : dark;

	return (
		<nav className="navbar" style={{ background: bg }} role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<div className="navbar-item">
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
};

export default Header;
