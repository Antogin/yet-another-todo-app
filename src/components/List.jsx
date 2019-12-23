import React, { Component } from 'react';

class List extends Component {
	render() {
		return (
			<div className="list is-hoverable" style={{ margin: '10px' }}>
				<div className="list-item">Featured</div>
				<div className="list-item is-active">All Posts</div>
				<div className="list-item">Announcements</div>
			</div>
		);
	}
}

export default List;
