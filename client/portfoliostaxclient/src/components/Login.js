//represents login form allowing users to input email and password

import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { login } from "./UserProfileManager";  

export default function Login({setIsLoggedIn}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({email, password})
      .then(r =>{
      if(r){
      setIsLoggedIn(true)
      navigate('/')
      }
      else{
        alert("Invalid email or password")
      }
    })
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '1', backgroundColor: '#86C232' }}>
        {/* Left side with logo */}
        <div style={{ padding: '20px', color: '#fff' }}>
          {/* Add your logo here */}
          <h1>Logo Here</h1>
        </div>
      </div>
      <div style={{ flex: '1', backgroundColor: '#fff' }}>
        {/* Right side with login content */}
        <div style={{ padding: '20px' }}>
          <h2>Login</h2>
          <Form onSubmit={loginSubmit}>
            <fieldset>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Button>Login</Button>
              </FormGroup>
              <em>
                Not registered? <Link to="/register">Register</Link>
              </em>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}