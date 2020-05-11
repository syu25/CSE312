import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
// import { FacebookLoginButton } from 'react-social-login-buttons';

import {
  getFromStorage,
  setInStorage,
} from '../src/utils/storage';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInUsername: '',
      signInPassword: '',
    };

    this.onTextBoxChangeSignInUsername = this.onTextBoxChangeSignInUsername.bind(this);
    this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this); 

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

  onTextBoxChangeSignInUsername(event) {
    this.setState({
      signInUsername: event.target.value
    });
  }
  onTextBoxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onSignIn(){
    const {
      signInUsername,
      signInPassword,
    } = this.state;
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInUsername,
      signInPassword,
    } = this.state;

    if(isLoading) {
      return (<div><p>Loading. . . </p></div>)
    }
    if(!token) {
      // return(<div><p>Sign Up!!!</p></div>)
    }

    return (
        <Form className="login-form">
      <h1><span className="font-weight-bold">Log In</span></h1>
      <FormGroup>
          <Label>Username</Label>
          <Input type="email" placeholder="Username" value={signInUsername} onChange={this.onTextBoxChangeSignInUsername }/>
      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" value={signInPassword} onChange={this.onTextBoxChangeSignInPassword}/>
      </FormGroup>

      <Link to="/" style={{ textDecoration: "none" }}>
          <Button onClick={this.onSignIn} className="btn-lg btn-dark btn-block">Log in</Button>
      </Link>

      <div className="text-center">
          <a href="/Signup">Sign up</a>
          <span className="p-2"> | </span>
          <a href="/forgot-password">Forgot Password</a>
      </div>

      
    </Form>
    );
  }
}
export default Login;