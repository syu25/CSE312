import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Login from './Login';
import Home from './Home';
import DirectMessage from './DirectMessage';
import Friend from './Friend';
import Profile from './Profile';


class App extends Component {
	render() {
		console.log('Host URL' + process.env.PUBLIC_URL);
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div className="App">
				<Navbar fixed="top" variant="dark" className="navbar">
					<div className="logo">
						<Link to="Login" style={{ textDecoration: 'none' }}>
							Login.....
						</Link>
						<Link to="DirectMessage" style={{ textDecoration: 'none' }}>
							Messages.....
						</Link>
						<Link to="/" style={{ textDecoration: 'none' }}>
							Home.....
						</Link>
						<Link to="Profile" style={{ textDecoration: 'none' }}>
							Profile.....
						</Link>
					</div>
				</Navbar>
					<header className="App-header"></header>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Login" component={Login} />
						<Route path="/DirectMessage" component={DirectMessage} />
						<Route path="/Friend" component={Friend} />
						<Route path="/Profile" component={Profile} />
					</Switch>
				</div>
			</Router>
		);
	}
}

// class Counter extends Component {
//   state = {
//     count: 0
//   };
//   render() {
//     return <button onClick={alert('Click me...')}>{this.state.count}</button>;
//   }
// }

export default App;
