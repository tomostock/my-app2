import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const Login = ({ history }) => {
  const { login } = useContext(AuthContext);

  // AuthContextからlogin関数を受け取る
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
  };
  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
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
        <Button variant="contained" color="primary" type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
