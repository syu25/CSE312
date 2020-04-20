import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Comment = (props) => (
	<div>
		<div>
			<b>{props.comment.username}</b>: {props.comment.comment}
		</div>
	</div>
);

export default class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = { comments: [] };
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/comments/')
			.then((response) => {
				this.setState({ comments: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	commentList() {
		return this.state.comments.map((current_comment) => {
			return <Comment comment={current_comment} key={current_comment._id} />;
		});
	}

	render() {
		return <div>{this.commentList()}</div>;
	}
}
