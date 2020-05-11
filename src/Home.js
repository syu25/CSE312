import React, { useState } from 'react';
import io from 'socket.io-client'
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Login from './Login';
import DirectMessage from './DirectMessage';
import Profile from './Friend';
import axios from 'axios';
import { render } from 'react-dom';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
// const  Chat  = require("../backend/Vote");
// const  connect  = require("../backend/dbconnection");

const socketURL = "http://localhost:8000/"


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: 'Me',
            message: '',
            like: 0,
            dislike: 0,
            messages: []
        };

        this.like = React.createRef();
        this.disklike = React.createRef();

        this.socket = io('localhost:5000');

        this.btnclick = ev => {
            // ev.preventDefault();
            this.socket.emit('clicked');
        }

        this.disliked = ev => {
        // ev.preventDefault();
        this.socket.emit('dclicked');
        }


        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        this.socket.on('click_count', function(data){
            addCount(data);
                });

        this.socket.on('click_decrease', function(data){
            addCountD(data);
                });


        const addCount = data => {
                    console.log(data);
                    this.setState({like:data});
                    console.log(this.state.like);
            };

        const addCountD = data => {
                console.log(data);
                this.setState({dislike:data});
                console.log(this.state.dislike);
        };

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
            })
            this.setState({message: ''});
        }

        this.handleChange = e => {
            this.setState({ message: e.target.value })
          }

        this.addEmoji = e => {
            let sym = e.unified.split('-')
            let codesArray = []
            sym.forEach(el => codesArray.push('0x' + el))
            let emoji = String.fromCodePoint(...codesArray)
            this.setState({
               message: this.state.message + emoji
            })
          }
 
    }

    // componentDidMount() {
    //     // Load the last 10 messages in the window.
    //     this.socket.on('init', (msg) => {
    //       this.setState((state) => ({
    //         messages: [...state.messages, ...msg.reverse()],
    //       }), this.scrollToBottom);
    //     });
    
    //     // Update the chat if a new message is broadcasted.
    //     this.socket.on('push', (msg) => {
    //       this.setState((state) => ({
    //         messages: [...state.messages, msg],
    //       }), this.scrollToBottom);
    //     });
    //   }
      
    
    //   // Save the message the user is typing in the input field.
    //   handleContent(event) {
    //     this.setState({
    //       message: event.target.value,
    //     });
    //   }

    //   handleSubmit(event){
    //       console.log(event);
    //       event.preventDefault();

    //       this.setState((state)=>{
    //           console.log(state);
    //           console.log('this', this.socket);
    //           this.socket.emit('message', {
    //               username: state.username,
    //               message: state.message,
    //           });
    //       });
    //   }
      
    //   commentList() {
	// 	return this.state.messages.map((current_comment) => {
	// 		return <Comment comment={current_comment} key={current_comment._id} />;
	// 	});
	// }
    
    

	render() {
        const {title} = this.props;
        
		return (
			<div className="home">
				<div className="Body">
					<div className="Post">
                    <div className="card-footer">
                                {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/> */}
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <div className="Emoji">
                                <span><Picker onSelect={this.addEmoji} /></span>
                                </div>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                <input type = "file" onChange={this.filesSelectorHandler}></input>
                                <button onClick={this.fileUploadHandler} className="btn btn-primary form-control">Upload</button>
                            </div>
						<br></br>
						{/* <input type="file" onChange={this.onChangeHandler}/> */}
					</div>
                    <div className="card-body">
                                <div className="card-title">Posts</div>
                                <hr/>
                                <div className="messages">{this.state.messages.map(message => {
                                        return (
                                        <div>{message.author}:<div></div>{message.message}<div></div> <button onClick={this.btnclick} value={this.state.like}>Like {this.state.like}</button></div>
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
