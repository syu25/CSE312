import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
// import { FacebookLoginButton } from 'react-social-login-buttons';

class Signup extends Component {
  render() {
    return (
        <Form className="login-form">
      <h1><span className="font-weight-bold">Register</span></h1>
      <FormGroup>
          <Label>Username</Label>
          <Input type="email" placeholder="Username"/>
      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
      </FormGroup>

      <Link to="/" style={{ textDecoration: "none" }}>
          <Button className="btn-lg btn-dark btn-block">Register</Button>
      </Link>

      <div className="text-center">
          <a href="/login">Already have an account? Log in!</a>
      </div>

      
    </Form>
    );
  }
}
export default Signup;