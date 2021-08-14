import { app } from "../base";
import Button from '@material-ui/core/Button';
import '../css/auth.css';
import React from "react";

const LogOut = () => {
  app.auth().signOut().then(function() {
    console.log("logout");
  }).catch(function(error) {
    alert(error);
  });

  return (
    <div className="auth">
      <div className="formContainer">
        <h1>Log Outed</h1>
        <Button variant="contained" color="primary" href="./">Top</Button>
      </div>
    </div>
  );
};

export default LogOut;
