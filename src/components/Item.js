import React from 'react';

const Item = ({ title, id, done, onClickDelete, toggleState }) => {
	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onClickDelete(id);
	};

	const handleToggleState = () => {
		toggleState(id);
	};

	return (
		<div
			onClick={handleToggleState}
			key={id}
			className="list-item  is-clickable"
			style={{ textDecoration: done ? 'line-through' : 'none' }}
		>
			{title}
			{done ? <div value={id} onClick={handleDelete} className="delete is-pulled-right" /> : null}
		</div>
	);
};

export default Item;
