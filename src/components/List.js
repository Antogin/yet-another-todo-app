import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import NewTaskForm from './NewTaskForm';
import './List.scss';
import Item from './Item';

const TodoList = () => {
	const { todoItems, addTodo, toggleState, removeTodo, startWork, stopWork } = useContext(TodoContext);

	return (
		<div className="list" style={{ margin: '10px' }}>
			{todoItems.map(({ title, id, done, started, timeSpent }) => {
				return (
					<Item
						{...{ title, id, done, started, toggleState, startWork, stopWork, timeSpent }}
						onClickDelete={removeTodo}
						key={id}
					/>
				);
			})}
			<NewTaskForm onSubmit={addTodo} />
		</div>
	);
};

export default TodoList;
