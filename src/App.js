import React from 'react';
import List from './components/List';
import Header from './components/Header';
import ThemeContextProvider from './context/ThemeContext';

function App() {
	return (
		<div className="App ">
			<ThemeContextProvider>
				<Header />

				<div class="container is-fluid">
					<List />
				</div>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
