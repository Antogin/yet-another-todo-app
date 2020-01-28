import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';
import { differenceInMilliseconds } from 'date-fns';

export const TodoContext = createContext();

const defaultTodo = [
	{ title: 'Deploy the thing', id: '660e9df0-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'PWA support', id: '684c0ad0-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'Time tracking', id: 'ab025130-2712-11ea-aeb4-9f34813c101c', done: true },
	{ title: 'Online saves', id: '6dad4cf0-2712-11ea-aeb4-9f34813c101c', done: false }
];

const TodoContextProvider = ({ children }) => {
	const todos = JSON.parse(localStorage.getItem('todos'));
	const [ todoItems, setTodoItems ] = useState(todos || defaultTodo);

	const updateTodoItems = (todos) => {
		setTodoItems(todos);
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const addTodo = (title) => {
		updateTodoItems([
			...todoItems,
			{
				title,
				timeSpent: 0,
				id: uuid(),
				done: false
			}
		]);
	};

	const startWork = (id) => {
		updateTodoItems(
			todoItems.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						started: new Date().toISOString(),
						timeSpent: todo.timeSpent ? todo.timeSpent : 0
					};
				}
				return todo;
			})
		);
	};

	const stopWork = (id) => {
		updateTodoItems(
			todoItems.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						started: null,
						timeSpent: differenceInMilliseconds(new Date(), new Date(todo.started)) + todo.timeSpent
					};
				}
				return todo;
			})
		);
		console.log(todoItems);
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
		<TodoContext.Provider
			value={{
				todoItems,
				addTodo,
				removeTodo,
				toggleState,
				startWork,
				stopWork
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
