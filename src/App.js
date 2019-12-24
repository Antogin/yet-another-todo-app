import React from 'react';
import List from './components/List';
import Header from './components/Header';
import TodoContextProvider from './context/TodoContext';

function App() {
	return (
		<div className="App ">
			<TodoContextProvider>
				<Header />

				<div className="container is-fluid">
					<List />
				</div>
			</TodoContextProvider>
		</div>
	);
}

export default App;
