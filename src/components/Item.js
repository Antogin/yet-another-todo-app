import React, { useState, useEffect } from 'react';
import { differenceInMilliseconds } from 'date-fns';

const msToTime = (duration) => {
	if (!duration) {
		return '00:00:00';
	}
	let seconds = parseInt((duration / 1000) % 60),
		minutes = parseInt((duration / (1000 * 60)) % 60),
		hours = parseInt((duration / (1000 * 60 * 60)) % 24);

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	return hours + ':' + minutes + ':' + seconds;
};

const Item = ({ title, id, done, onClickDelete, timeSpent, toggleState, startWork, stopWork, started }) => {
	const calculateTimeLeft = (started, timeSpent) => {
		if (!started) {
			return msToTime(timeSpent);
		}
		const diff = differenceInMilliseconds(new Date(), new Date(started));
		return msToTime(diff + timeSpent);
	};

	const [ timeLeft, setTimeLeft ] = useState(calculateTimeLeft(started, timeSpent));

	useEffect(() => {
		if (started) {
			setTimeout(() => {
				setTimeLeft(calculateTimeLeft(started, timeSpent));
			}, 1000);
		}
	});

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
			{done ? <div value={id} onClick={handleDelete} className="delete is-pulled-right" /> : null}

			{started ? (
				<span className="tag is-primary is-pulled-right mr-5" onClick={handleStop}>
					Stop
				</span>
			) : (
				<span className="tag is-primary is-pulled-right mr-5" onClick={handleStart}>
					Start
				</span>
			)}
			<span className="is-pulled-right mr-5" style={{ textDecoration: done ? 'line-through' : 'none' }}>
				{timeLeft}
			</span>
		</div>
	);
};

export default Item;
