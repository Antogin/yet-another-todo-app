import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [ todoItems, setTodoItems ] = useState(JSON.parse(localStorage.getItem('todos')) || []);

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
