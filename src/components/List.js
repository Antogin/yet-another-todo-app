import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import NewTaskForm from './NewTaskForm';
import './List.scss';
import Item from './Item';

const TodoList = () => {
	const { todoItems, addTodo, toggleState, removeTodo } = useContext(TodoContext);

	return (
		<div className="list" style={{ margin: '10px' }}>
			{todoItems.map(({ title, id, done }) => {
				return <Item {...{ title, id, done, toggleState }} onClickDelete={removeTodo} />;
			})}
			<NewTaskForm onSubmit={addTodo} />
		</div>
	);
};

export default TodoList;
