import React from 'react';
import List from './components/List';
import Header from './components/Header';
import ThemeContextProvider from './context/ThemeContext';
import TodoContextProvider from './context/TodoContext';

function App() {
	return (
		<div className="App ">
			<ThemeContextProvider>
				<TodoContextProvider>
					<Header />

					<div className="container is-fluid">
						<List />
					</div>
				</TodoContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
