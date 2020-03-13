import React from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input }
 from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
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
      <Button className="btn-lg btn-dark btn-block">Log in</Button>
      <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
      </div>
    </Form>
  );
}

export default App;
