import React, { useState } from 'react';

const NewTaskForm = ({ onSubmit }) => {
	const [ title, setTitle ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="input"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				type="text"
				required
				placeholder="New Task"
			/>
		</form>
	);
};

export default NewTaskForm;
