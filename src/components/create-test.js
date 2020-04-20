import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTest extends Component {
	constructor(props) {
		super(props);

		this.onChangeTest = this.onChangeTest.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			test: '',
		};
	}

	onChangeTest(e) {
		this.setState({
			test: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const test = {
			test: this.state.test,
		};

		console.log(test);

		axios
			.post('http://localhost:5000/tests/add', test)
			.then((res) => console.log(res.data));

		this.setState({
			test: '',
		});
	}

	render() {
		return (
			<div>
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Test: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.test}
							onChange={this.onChangeTest}
						/>
					</div>
					<div className="form-group">
						<input
							type="submit"
							value="Create Test"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}
