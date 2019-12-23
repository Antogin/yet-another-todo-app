import React, { Component } from 'react';

class List extends Component {
	state = {};
	render() {
		return (
			<div class="list is-hoverable" style={{ margin: '10px' }}>
				<div class="list-item">Featured</div>
				<div class="list-item is-active">All Posts</div>
				<div class="list-item">Announcements</div>
			</div>
		);
	}
}

export default List;
