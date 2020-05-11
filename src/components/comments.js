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
		// this.state = { comments: [] };

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeComment = this.onChangeComment.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			comment: '',
			comments: []
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}
	onChangeComment(e) {
		this.setState({
			comment: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const comment = {
			username: this.state.username,
			comment: this.state.comment,
		};

		console.log(comment);

		axios
			.post('http://localhost:5000/comments/add', comment)
			.then((res) => console.log(res.data));

		this.setState({
			username: '',
			comment: '',
		});
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
		return (
			<div>
				<h3>Make a Comment</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div className="form-group">
						<label>Comment: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.comment}
							onChange={this.onChangeComment}
						/>
					</div>

					<div className="form-group">
						<input
							type="submit"
							value="Create Comment"
							className="btn btn-primary"
						/>
					</div>
				</form>
				<div>{this.commentList()}</div>
			</div>
		);
		
	}
}
