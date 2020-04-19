import React, { Component } from 'react';
import io from 'socket.io-client'
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Login from './Login';
import DirectMessage from './DirectMessage';
import Profile from './Friend';

const socketURL = "http://localhost:8000/"
class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: 'Me',
            message: '',
            like:0,
            dislike:3,
            messages: []
        };

        this.like = React.createRef();
        this.disklike = React.createRef();

        this.socket = io('localhost:5000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        // this.socket.on('clicked',function(data) {
        //     document.body.innerHTML = '';
        //     document.write(data);
        //  });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };
        
        

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message,
                like: this.state.like,
                disklike: this.state.disklike
            })
            this.setState({message: ''});
        }

        this.buttonClicked = ev=>{
            this.socket.emit('clicked');
          }

          this.socket.on('buttonUpdate', function(data){
            document.getElementById("likes").innerHTML = 'The button has been clicked ' + data + ' times.';
        });


        
    }
	render() {
		const {title} = this.props
		return (
			<div className="home">
				<div className="Body">
					<div className="Post">
                    <div className="card-footer">
                                {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/> */}
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
						<br></br>
						<button type="button">Send</button>
						<button type="button">Add Media</button>
						<button type="button">Clear</button>
						{/* <input type="file" onChange={this.onChangeHandler}/> */}
					</div>
                    <div className="card-body">
                                <div className="card-title">Posts</div>
                                <hr/>
                                <div className="messages">
                                <button id='btn_click'> like</button>Click counts:<span id="counter"></span>
                                    {this.state.messages.map(message => {
                                        return (
                                        <div>{message.author}: {message.message} {message.like} {message.dislike} </div>
                                        )
                                    })}
                                    {this.state.messages.map(message => {
                                        return (
                                        <button onClick = {this.buttonClicked} value={this.state.like}>Like {message.like}</button>
                                        )
                                    })}
                                    {this.state.messages.map(message => {
                                        return (
                                        <button>Dislike {message.dislike}</button>
                                        )
                                    })}
                                </div>
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
