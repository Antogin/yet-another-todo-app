import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

class Header extends Component {
	static contextType = ThemeContext;
	render() {
		const { isLightTheme, light, dark } = this.context;

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
	}
}

export default Header;
