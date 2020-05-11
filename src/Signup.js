import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
// import { FacebookLoginButton } from 'react-social-login-buttons';

import {
  getFromStorage,
  setInStorage,
} from '../src/utils/storage';

class Signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInUsername: '',
      signInPassword: '',
      signUpUsername: '',
      signUpPassword: '',
    };

    this.onTextBoxChangeSignUpUsername = this.onTextBoxChangeSignUpUsername.bind(this);
    this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
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

  onTextBoxChangeSignUpUsername(event) {
    this.setState({
      signUpUsername: event.target.value
    });
  }

  onTextBoxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }

  onSignUp(){ 
    const {
      signUpUsername,
      signUpPassword,
    } = this.state;

    // this.setState({
    //   isLoading = true,
    // });

    fetch('../backend/routes/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then(res => res.json())
      .then(json => {
         if(json.success) {
           this.setState({
             signUpError: 'Successfull',
             isLoading: false,
             signUpUsername: '',
             signUpPassword: '',

           });
         } else {
          this.setState({
            signUpError: 'Error',
            isLoading: false,

          });
         }
      });
  }

  render() {

    const {
      isLoading,
      token,
      signInError,
      signInUsername,
      signInPassword,
      signUpUsername,
      signUpPassword,
    } = this.state;

    if(isLoading) {
      return (<div><p>Loading. . . </p></div>)
    }
    if(!token) {
      // return(<div><p>Sign Up!!!</p></div>)
    }

    return (
        <Form className="login-form">
      <h1><span className="font-weight-bold">Register</span></h1>
      <FormGroup>
          <Label>Username</Label>
          <Input type="email" placeholder="Username" value={signUpUsername} onChange={this.onTextBoxChangeSignUpUsername}/>
      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" value={signUpPassword} onChange={this.onTextBoxChangeSignUpPassword}/>
      </FormGroup>

      <Link to="/" style={{ textDecoration: "none" }}>
          <Button onClick={this.onSignUp} className="btn-lg btn-dark btn-block">Register</Button>
      </Link>

      <div className="text-center">
          <a href="/login">Already have an account? Log in!</a>
      </div>

      
    </Form>
    );
  }
}
export default Signup;