import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
// import { FacebookLoginButton } from 'react-social-login-buttons';

class Login extends React.Component {
  render() {
    return (
        <Form className="login-form">
      <h1><span className="font-weight-bold">website</span>.com</h1>
      <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
      </FormGroup>

      <Link to="/" style={{ textDecoration: "none" }}>
          <Button className="btn-lg btn-dark btn-block">Log in</Button>
      </Link>

      <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
      </div>

      
    </Form>
    );
  }
}
export default Login;