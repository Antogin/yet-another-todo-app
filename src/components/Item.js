import React from 'react';

const Item = ({ title, id, done, onClickDelete, timeSpent, toggleState, startWork, stopWork, started }) => {
	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onClickDelete(id);
	};

	const handleStart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		startWork(id);
	};

	const handleStop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		stopWork(id);
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

			{started ? (
				<span className="tag is-primary is-pulled-right" onClick={handleStop}>
					Stop
				</span>
			) : (
				<span className="tag is-primary is-pulled-right" onClick={handleStart}>
					Start
				</span>
			)}
			{done ? <div value={id} onClick={handleDelete} className="delete is-pulled-right" /> : null}
		</div>
	);
};

export default Item;
