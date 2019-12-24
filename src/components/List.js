import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import NewTaskForm from './NewTaskForm';
import './List.scss';

const TodoList = () => {
	const { todoItems, addTodo, toggleState } = useContext(TodoContext);

	return (
		<div className="list is-hoverable" style={{ margin: '10px' }}>
			{todoItems.map(({ title, id, done }) => {
				return (
					<div
						onClick={() => toggleState(id)}
						key={id}
						className="list-item"
						style={{ textDecoration: done ? 'line-through' : 'none' }}
					>
						{title}
						<div className="delete is-pulled-right" />
					</div>
				);
			})}
			<NewTaskForm onSubmit={addTodo} />
		</div>
	);
};

export default TodoList;
