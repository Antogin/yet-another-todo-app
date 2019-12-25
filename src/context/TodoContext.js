import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const defaultTodo = [
	{ title: 'Learn about hooks', id: '5dc99cd0-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'Learn about context', id: '62a55b40-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'Deploy the thing', id: '660e9df0-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'PWA support', id: '684c0ad0-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'Auth', id: '6b025130-2712-11ea-aeb4-9f34813c101c', done: false },
	{ title: 'Online sync', id: '6dad4cf0-2712-11ea-aeb4-9f34813c101c', done: false },
	{ title: 'Real time updates', id: '71864160-2712-11ea-aeb4-9f34813c101c', done: false }
];

const TodoContextProvider = ({ children }) => {
	const todos = JSON.parse(localStorage.getItem('todos'));
	const [ todoItems, setTodoItems ] = useState(todos || defaultTodo);

	console.log(JSON.parse(localStorage.getItem('todos')));
	const updateTodoItems = (todos) => {
		setTodoItems(todos);
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const addTodo = (title) => {
		updateTodoItems([
			...todoItems,
			{
				title,
				id: uuid(),
				done: false
			}
		]);
	};

	const toggleState = (id) => {
		updateTodoItems(
			todoItems.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done
					};
				}
				return todo;
			})
		);
	};

	const removeTodo = (id) => {
		const filter = todoItems.filter((todoItem) => todoItem.id !== id);
		updateTodoItems(filter);
	};

	return (
		<TodoContext.Provider value={{ todoItems, addTodo, removeTodo, toggleState }}> {children}</TodoContext.Provider>
	);
};

export default TodoContextProvider;
