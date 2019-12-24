import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import NewTaskForm from './NewTaskForm';
import './List.scss';

const TodoList = () => {
	const { todoItems, addTodo } = useContext(TodoContext);

	return (
		<div className="list is-hoverable" style={{ margin: '10px' }}>
			{todoItems.map(({ title, id }) => {
				return (
					<div key={id} className="list-item ">
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
