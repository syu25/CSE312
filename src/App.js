import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import DirectMessage from './DirectMessage';
import Profile from './Profile';

class App extends Component {
	render() {
		console.log('Host URL' + process.env.PUBLIC_URL);
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div className="App">
					<header className="App-header"></header>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Login" component={Login} />
						<Route path="/DirectMessage" component={DirectMessage} />
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
