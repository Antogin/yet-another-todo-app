import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [ todoItems, setTodoItems ] = useState([
		{
			title: 'learn context',
			id: uuid(),
			done: true
		},
		{
			title: 'learn hooks',
			id: uuid(),
			done: false
		}
	]);

	const addTodo = (title) => {
		setTodoItems([
			...todoItems,
			{
				title,
				id: uuid(),
				done: false
			}
		]);
	};

	const toggleState = (id) => {
		setTodoItems(
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
		setTodoItems(todoItems.filter((todo) => todo.id === id));
	};

	return (
		<TodoContext.Provider value={{ todoItems, addTodo, removeTodo, toggleState }}> {children}</TodoContext.Provider>
	);
};

export default TodoContextProvider;
