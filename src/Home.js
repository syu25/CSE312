import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Login from './Login';
import DirectMessage from './DirectMessage';
import Profile from './Friend';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="Body">
					<div className="Post">
						<textarea id="Send-Message" rows="3" cols="39" wrap="soft">
							Whats Up?
						</textarea>
						<br></br>
						<button type="button">Send</button>
						<button type="button">Add Media</button>
						<button type="button">Clear</button>
						{/* <input type="file" onChange={this.onChangeHandler}/> */}
					</div>

					<div className="Posted">
						Posts shows up here
						<button type="button">Like</button>0
						<button type="button">Dislike</button>0
					</div>
				</div>

				<div className="Friends">Friends
				<Link to="Friend" style={{ textDecoration: 'none' }}>
					<Button type="button">John Doe</Button>
						</Link>
				
				</div>
			</div>
		);
	}

	onChangeHandler = event => {
		console.log(event.target.files[0]);
	};
}

export default Home;
