import React, { createContext, Component } from 'react';

export const { Provider } = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: true,
		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
	};

	render() {
		return <Provider value={{ ...this.state }}>{this.props.children}</Provider>;
	}
}

export default ThemeContextProvider;
