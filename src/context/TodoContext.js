import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [ todoItems, setTodoItems ] = useState([
		{
			title: 'learn context',
			id: '1',
			done: true
		},
		{
			title: 'learn hooks',
			id: '2',
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
		const filter = todoItems.filter((todoItem) => todoItem.id !== id);
		console.log(id, todoItems[0], todoItems[0].id === id);
		setTodoItems(filter);
	};

	return (
		<TodoContext.Provider value={{ todoItems, addTodo, removeTodo, toggleState }}> {children}</TodoContext.Provider>
	);
};

export default TodoContextProvider;
