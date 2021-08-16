import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import Button from '@material-ui/core/Button';
import '../css/auth.css';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { TittleAlarm } from "../Game";

const Login = ({ history }) => {
  const { login } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log("login");
    if(history.location.pathname === "/Game") {
      TittleAlarm();
    }
    login(email.value, password.value, history.location);
  };
  return (
    <div className="auth">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <FormControl>
            <InputLabel>
              Email
            </InputLabel>
            <Input name="email" type="email" placeholder="Email" />
          </FormControl>
          <FormControl>
            <InputLabel>
              Password
            </InputLabel>
            <Input name="password" type="password" placeholder="Password" />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </form>
        <Button  color="primary" href="/signup">
          <span className="signup">SignUp</span>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Login);
