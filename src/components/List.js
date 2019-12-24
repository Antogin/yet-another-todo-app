import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import NewTaskForm from './NewTaskForm';
import './List.scss';

const TodoList = () => {
	const { todoItems, addTodo, toggleState, removeTodo } = useContext(TodoContext);

	const onClickDelete = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		removeTodo(id);
	};

	return (
		<div className="list" style={{ margin: '10px' }}>
			{todoItems.map(({ title, id, done }) => {
				return (
					<div
						onClick={() => toggleState(id)}
						key={id}
						className="list-item  is-clickable"
						style={{ textDecoration: done ? 'line-through' : 'none' }}
					>
						{title}
						{done ? (
							<div value={id} onClick={(e) => onClickDelete(e, id)} className="delete is-pulled-right" />
						) : null}
					</div>
				);
			})}
			<NewTaskForm onSubmit={addTodo} />
		</div>
	);
};

export default TodoList;
