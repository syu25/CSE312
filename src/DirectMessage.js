import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Signup from './Signup';

import {
  getFromStorage,
  setInStorage,
} from '../src/utils/storage';

class DirectMessage extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
    };
  }

  componentDidMount() {
    if(getFromStorage('CSE312')) {
      fetch('/account/verify?token=' + this.state.token)
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          this.setState({
            token: this.state.token,
            isLoading: false
          });
        }
        else {
          this.setState({
            isLoading: false,
          });
        }
      });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {

    const {
      isLoading,
      token,
    } = this.state;

    if(isLoading) {
      return (<div><p>Loading. . . </p></div>)
    }
    if(!token) {
      // <Route path="/Signup" component={Signup} />
      return(<div><p>Sign Up!!!</p></div>)
      // return <Redirect to={{redirect: "/Login"}} />
    }

    return (
      
      <div className="home">

    <h2><strong>Direct Message user_name</strong></h2>
    <h3><strong>Chat History:</strong></h3>
    <textarea id="Chat-History" rows="30" cols="39" wrap='soft'>No chat History... Be the first to send user_name a message!!!</textarea>
    <br></br>
    <textarea id="Send-Message" rows="3" cols="39" wrap='soft'>Whats Up?</textarea>
    <br></br>
    <Button type="button">Send</Button>
    <Button type="button">Add Media</Button>
    <Button type="button">Clear Chat History</Button>
    <Link to="/" style={{ textDecoration: "none" }}>
          <Button type="button">Back</Button>
    </Link>
       <input type="file" name="file" onChange={this.onChangeHandler}/>
      </div>
      
    );
  }

  onChangeHandler=event=>{

    console.log(event.target.files[0])
  
  }
}

export default DirectMessage;